// @ts-nocheck

import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { parse } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), './src/posts');
const cacheDirectory = './src/cache/posts';

function trimGpxCoordinates(gpx, everyThird = false) {
  const coordinates = [];

  gpx.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((coordinate) => {
      if (Array.isArray(coordinate)) {
        coordinates.push(coordinate);
      }
    });
  });

  return coordinates
    .filter((_, index) => (everyThird ? index % 3 === 2 : index % 2 === 0))
    .filter((coordinate) => coordinate[0] !== null && coordinate[1] !== null)
    .map((coordinate) => [coordinate[1], coordinate[0]]);
}

async function routeFromGpx(filePath: string) {
  try {
    const xml = await fsPromises.readFile(
      path.join(process.cwd(), './src/gpxs', filePath),
      'utf-8',
    );

    return gpx(new DOMParser().parseFromString(xml, 'text/xml'));
  } catch (error) {
    return undefined;
  }
}

function createCacheDirectory(destination) {
  try {
    fs.readdirSync(destination);
  } catch (e) {
    fs.mkdirSync(destination);
  }
}

function writeCacheFile(destination, file, content) {
  createCacheDirectory(destination);

  fs.writeFile(`${destination}/${file}`, content, function (error) {
    if (error) {
      return console.log(error);
    }

    console.log(`${destination}/${file} cached`);
  });
}

function getPostStages(postFolder, postMeta) {
  const stagesDirectory = path.join(postsDirectory, `${postFolder}/stages`);

  if (fs.existsSync(stagesDirectory)) {
    const stageFiles = fs.readdirSync(stagesDirectory).filter((directory) => {
      if (directory !== '.DS_Store') {
        return directory;
      }
    });

    const stages = stageFiles.map((stageFile) => {
      const file = path.join(stagesDirectory, stageFile);

      const stage = fs.readFileSync(file, 'utf8');

      const { content, data } = matter(stage);

      return {
        stage: stageFile.replace('.mdx', ''),
        content,
        meta: {
          ...data,
          breadcrumbs: [
            {
              title: postMeta.title,
              uri: postMeta.uri,
            },
            {
              title: 'Stages',
              uri: `${postMeta.uri}#timeline`,
            },
          ],
          newer: null,
          older: null,
          tags: data.tags.split(','),
          time: data.time.split(','),
        },
      };
    });

    stages.map((stage) => {
      if (stage.meta.next) {
        stage.meta.newer = stages
          .filter((_) => _.meta.id === stage.meta.next)
          .map((_) => ({
            image: _.meta.image,
            title: _.meta.title,
            uri: _.meta.uri,
          }))[0];
      }

      if (stage.meta.previous) {
        stage.meta.older = stages
          .filter((_) => _.meta.id === stage.meta.previous)
          .map((_) => ({
            image: _.meta.image,
            title: _.meta.title,
            uri: _.meta.uri,
          }))[0];
      }

      if (stage.meta.route) {
        stage.meta.route = {
          route: stage.meta.route,
          start: stage.meta.title.split(' to ')[0],
          stop: stage.meta.title.split(' to ')[1],
        };
      }

      return stage;
    });

    return stages;
  }

  return null;
}

function getPosts() {
  const postsFolders = fs.readdirSync(postsDirectory).filter((directory) => {
    if (directory !== '.DS_Store') {
      return directory;
    }
  });

  const posts = postsFolders.map((postFolder) => {
    const post = fs.readFileSync(
      path.join(postsDirectory, `${postFolder}/index.mdx`),
      'utf8',
    );

    const { content, data } = matter(post);

    const stages = getPostStages(postFolder, data);

    return {
      content,
      folder: postFolder,
      meta: {
        ...data,
        marker: data.marker ? {
          left: `${data.marker.split(',')[0]}%`,
          top: `${data.marker.split(',')[1]}%`,
        } : null,
        newer: null,
        older: null,
        stats: null,
        tags: data.tags.split(','),
      },
      stages,
    };
  })
  .sort(
    (a, b) =>
      parse(b.meta.date, 'MMMM do, yyyy', new Date()) -
      parse(a.meta.date, 'MMMM do, yyyy', new Date()),
  );

  posts.map((post) => {
    if (post.meta.next) {
      post.meta.newer = posts
        .filter((_) => _.meta.id === post.meta.next)
        .map((_) => ({
          image: _.meta.image,
          title: _.meta.title,
          uri: _.meta.uri,
        }))[0];
    }

    if (post.meta.previous) {
      post.meta.older = posts
        .filter((_) => _.meta.id === post.meta.previous)
        .map((_) => ({
          image: _.meta.image,
          title: _.meta.title,
          uri: _.meta.uri,
        }))[0];
    }

    if (post.meta.route) {
      let routeStart = '';
      let routeStop = '';

      if (post.stages) {
        routeStart = post.stages[0].meta.title.split(' to ')[0];
        routeStop = post.stages[post.stages.length - 1].meta.title.split(' to ')[1];
      }

      post.meta.route = {
        route: post.meta.route,
        start: routeStart,
        stop: routeStop,
      };
    }

    if (post.stages) {
      post.meta.stats = {
        gain: post.stages.reduce((sum, stage) => sum + stage.meta.gain, 0),
        loss: post.stages.reduce((sum, stage) => sum + stage.meta.loss, 0),
        miles: post.stages.reduce((sum, stage) => sum + stage.meta.miles, 0),
        time: post.stages.length,
      };
    }

    return post;
  });

  return posts;
}

async function serializePostContent(folder, content) {
  const source = await serialize(content);

  writeCacheFile(`${cacheDirectory}/${folder}`, 'content.js', JSON.stringify(source));
}

async function writeRoute(folder, meta, everyThird = false) {
  if (!meta.route) {
    return;
  }

  const gpx = await routeFromGpx(`${meta.route.route}.gpx`);

  if (gpx) {
    const coordinates = trimGpxCoordinates(gpx, everyThird);

    writeCacheFile(`${cacheDirectory}/${folder}`, 'route.js', JSON.stringify(coordinates));
  }
}

async function serializeStageContent(folder, stage, content) {
  const source = await serialize(content);

  createCacheDirectory(`${cacheDirectory}/${folder}/stages`);

  writeCacheFile(`${cacheDirectory}/${folder}/stages/${stage}`, 'content.js', JSON.stringify(source));
}

function writeMetaData(folder, meta) {
  writeCacheFile(`${cacheDirectory}/${folder}`, 'meta.js', JSON.stringify(meta));
}

async function cache() {
  fs.rmSync(cacheDirectory, { recursive: true, force: true }, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Cache cleared');
    }
  });

  const posts = getPosts();

  const postsMetaData = `export const posts = ${JSON.stringify(posts.map((post) => post.meta))}`;

  writeCacheFile(cacheDirectory, 'index.js', postsMetaData);

  posts.forEach(async (post) => {
    await serializePostContent(post.folder, post.content);

    await writeRoute(post.folder, post.meta, true);

    writeMetaData(post.folder, post.meta);

    if (post.stages !== null) {
      const stages = post.stages.map((stage) => stage.meta);

      writeMetaData(`${post.folder}/stages`, stages);

      post.stages.forEach(async (stage) => {
        await serializeStageContent(post.folder, stage.stage, stage.content);

        await writeRoute(`${post.folder}/stages/${stage.stage}`, stage.meta);

        writeMetaData(`${post.folder}/stages/${stage.stage}`, stage.meta);
      });
    }
  });
}

cache();