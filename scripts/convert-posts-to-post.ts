// @ts-nocheck

const fs = require('fs');
const path = require('path');
import { parse } from 'date-fns';

function generateRandomString() {
  const timestamp = new Date().getTime().toString();
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 15; ++i) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    result += characters.charAt(randomIndex);
  }

  return result;
}

async function loadObject(filePath) {
  try {
    const file = await import(filePath);

    return file.default;
  } catch (error) {
    console.error('Error importing file: ', error);

    return null;
  }
}

function migrateIndexes(id, json, next, previous, uri, origin, destination) {
  let currentContent = fs.readFileSync(`${origin}/index.mdx`, 'utf8');

  const images = currentContent.match(/!\[([^\]]*)\]\(([^)]*)\)/g);

  if (images !== null && images.length > 0) {
    for (image of images) {
      const text = image.match(/\[(.*?)\]/)[1];
      const url = image.match(/\((.*?)\)/)[1];

      const urls = url.split(',').map((_) => `'${_}'`);

      currentContent = currentContent.replace(
        image,
        `<Gallery images={[${urls.join(',')}]} title="${text}" />`,
      );
    }
  }

  const matter = Object.fromEntries(
    Object.entries({
      author: 'Kyle Gilbert',
      date: json.date,
      id,
      image: json.image,
      location: json.locationFull,
      marker: json.marker
        ? `${json.marker.left.replace('%', '')},${json.marker.top.replace('%', '')}`
        : undefined,
      next,
      previous,
      route: json.route ? `${json.route}` : undefined,
      snippet: json.snippet,
      tags: json.tags.join(','),
      title: json.title,
      uri: `/post/${uri}`,
    }).filter(([key, value]) => value),
  );

  const updatedContent = `---
${Object.keys(matter)
  .map(
    (key) =>
      `${key}: ${matter[key].indexOf(':') > -1 ? `"${matter[key]}"` : matter[key]}`,
  )
  .join(`\r\n`)}
---

<Stats />

<Route />

${currentContent}
`;

  fs.writeFile(`${destination}/index.mdx`, updatedContent, function (error) {
    if (error) {
      return console.log(error);
    }
  });
}

function migrateStage(
  parentId,
  id,
  index,
  tags,
  json,
  previous,
  next,
  uri,
  origin,
  destination,
) {
  if (json.isReadOnly) {
    return;
  }

  const fileName = String(index + 1).padStart(2, '0');

  let currentContent = fs.readFileSync(`${origin}/${fileName}.mdx`, 'utf8');

  const images = currentContent.match(/!\[([^\]]*)\]\(([^)]*)\)/g);

  if (images !== null && images.length > 0) {
    for (image of images) {
      const text = image.match(/\[(.*?)\]/)[1];
      const url = image.match(/\((.*?)\)/)[1];

      const urls = url.split(',').map((_) => `'${_}'`);

      currentContent = currentContent.replace(
        image,
        `<Gallery images={[${urls.join(',')}]} title="${text}" />`,
      );
    }
  }

  const matter = Object.fromEntries(
    Object.entries({
      author: 'Kyle Gilbert',
      date: json.dateFull,
      id,
      image: json.image,
      parent: parentId,
      route: json.route,
      gain: json.stats.gain,
      loss: json.stats.loss,
      miles: json.stats.miles,
      next,
      previous,
      time: json.stats.time.join(','),
      tags: tags.join(','),
      title: json.title,
      uri: `/post/${uri}/stage/${fileName}`,
    }).filter(([key, value]) => value),
  );

  const updatedContent = `---
${Object.keys(matter)
  .map((key) => `${key}: ${matter[key]}`)
  .join(`\r\n`)}
---

<Stats />

<Route />

${currentContent}
`;

  try {
    fs.readdirSync(`${destination}/stages`);
  } catch (e) {
    fs.mkdirSync(`${destination}/stages`);
  }

  fs.writeFile(
    `${destination}/stages/${fileName}.mdx`,
    updatedContent,
    function (error) {
      if (error) {
        return console.log(error);
      }
    },
  );
}

const databaseDirectory = path.join(
  process.cwd(),
  './src/pages/api/_database/posts',
);
const postsDirectory = path.join(process.cwd(), './src/pages/posts');
const outputDirectory = path.join(
  process.cwd(),
  './src/pages/api/_database/posts',
);

const fileNames = fs.readdirSync(databaseDirectory);

const fileNamesFiltered = fileNames.filter((fileName) => {
  if (!['.DS_Store', 'index.ts', 'routes'].includes(fileName)) {
    return fileName;
  }
});

async function sortFileNames() {
  let fileNamesToBeSorted = [];

  await Promise.all(
    fileNamesFiltered.map(async (fileName) => {
      const id = generateRandomString();

      const json = await loadObject(path.join(databaseDirectory, fileName));

      if (json) {
        let date = json.date;

        if (date.includes('Mar')) {
          date = date.replace('Mar', 'March');
        } else if (date.includes('Sept')) {
          date = date.replace('Sept', 'September');
        }

        fileNamesToBeSorted.push({
          date: parse(date, 'MMMM do, yyyy', new Date()),
          fileName,
          id,
        });
      }
    }),
  );

  fileNamesToBeSorted.sort((a, b) => {
    return a.date - b.date;
  });

  return fileNamesToBeSorted;
}

sortFileNames().then((sorted) => {
  sorted.map(async ({ fileName, id }, index) => {
    const json = await loadObject(path.join(databaseDirectory, fileName));

    if (json) {
      const uri = json.uri.replace('/posts/', '');

      const destination = `./src/posts/${uri}`;
      const origin = `./src/pages/posts/${uri}`;

      if (fs.existsSync(destination)) {
        console.log(`${destination} already exists, stopping`);

        return;
      }

      try {
        fs.readdirSync(destination);
      } catch (e) {
        fs.mkdirSync(destination);
      }

      const next =
        sorted[index + 1] !== undefined ? sorted[index + 1].id : null;
      const previous =
        sorted[index - 1] !== undefined ? sorted[index - 1].id : null;

      migrateIndexes(id, json, next, previous, uri, origin, destination);

      if (json.stages) {
        const stages = json.stages.map((stage) => ({
          ...stage,
          id: generateRandomString(),
        }));

        stages.forEach((stage, stageIndex) => {
          const nextStage =
            stages[stageIndex + 1] !== undefined
              ? stages[stageIndex + 1].id
              : null;
          const previousStage =
            stages[stageIndex - 1] !== undefined
              ? stages[stageIndex - 1].id
              : null;

          migrateStage(
            id,
            stage.id,
            stageIndex,
            json.tags,
            stage,
            previousStage,
            nextStage,
            uri,
            origin,
            destination,
          );
        });
      }
    }
  });
});
