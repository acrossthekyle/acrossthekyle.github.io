import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

import { posts } from '@/cache/posts';
import Components from '@/components';
import type { Posts } from '@/types';
import { transformStagesForTimeline } from '@/utils/components';
import { routeFromGpx } from '@/utils/files';
import { trimGpxCoordinates } from '@/utils/posts';

const components = {
  Checklist: Components.Post.Checklist,
  Gallery: Components.Post.Gallery,
  Route: Components.Post.Route,
  Stats: Components.Post.Stats,
  World: Components.World,
};

type Meta = {
  id: string;
  uri: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  location: string;
  snippet: string;
  marker?: string;
  route?: string;
  next?: string;
  previous?: string;
};

type Post = {
  data: Meta;
  source: string;
};

async function getPost(post: string) {
  const filePath = path.join(
    path.join(process.cwd(), './src/posts'),
    `${post}/index.mdx`,
  );

  const file = await fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(file);

  const source = await serialize(content);

  return {
    data,
    source,
  };
}

export const getServerSideProps = async (request, response) => {
  const { data, source } = await getPost(request.query.post.toLowerCase());

  let newer = null;
  let older = null;

  if (data.next) {
    newer = posts
      .filter((post) => post.id === data.next)
      .map((post) => ({
        image: post.image,
        title: post.title,
        uri: post.uri,
      }))[0];
  }

  if (data.previous) {
    older = posts
      .filter((post) => post.id === data.previous)
      .map((post) => ({
        image: post.image,
        title: post.title,
        uri: post.uri,
      }))[0];
  }

  const post = posts.find((post) => post.id === data.id);

  let stages = post?.stages || null;
  let stats = null;

  if (stages) {
    stats = {
      gain: stages.reduce((sum, stage) => sum + stage.gain, 0),
      loss: stages.reduce((sum, stage) => sum + stage.loss, 0),
      miles: stages.reduce((sum, stage) => sum + stage.miles, 0),
      time: stages.length,
    };
  }

  let route = null;

  if (data.route) {
    const gpx = await routeFromGpx(`${data.route}.gpx`);

    const coordinates = trimGpxCoordinates(gpx, true);

    let routeStart = '';
    let routeStop = '';

    if (stages) {
      routeStart = stages[0].title.split(' to ')[0];
      routeStop = stages[stages.length - 1].title.split(' to ')[1];
    }

    route = {
      route: coordinates,
      start: routeStart,
      stop: routeStop,
    };
  }

  return {
    props: {
      meta: {
        ...data,
        marker: data.marker ? data.marker.split(',') : null,
        tags: data.tags.split(','),
      },
      newer,
      older,
      route,
      source,
      stages,
      stats,
    },
  };
};

type Props = {
  meta: Meta;
  newer: Posts.Newer | null;
  older: Posts.Older | null;
  route: Posts.Route | null;
  source: MDXRemoteSerializeResult;
  stages: Posts.Stage[] | null;
  stats: Posts.Stats | null;
};

function Page({ meta, newer, older, route, source, stages, stats }: Props) {
  return (
    <Components.View title={meta.title}>
      <Components.Post.Title
        author={meta.author}
        date={meta.date}
        tags={meta.tags}
        title={meta.title}
      />
      <Components.Post.Hero image={meta.image} />
      <Components.Post.Content>
        <MDXRemote
          {...source}
          components={{
            ...components,
            Route: () => (route ? <Components.Post.Route {...route} /> : null),
            Stages: () =>
              stages ? (
                <Components.Timeline
                  indexPrefix="Day"
                  segments={transformStagesForTimeline(stages)}
                />
              ) : null,
            Stats: () => (stats ? <Components.Post.Stats {...stats} /> : null),
            World: () =>
              meta.marker ? (
                <Components.World
                  markers={[
                    {
                      left: `${meta.marker[0]}%`,
                      top: `${meta.marker[1]}%`,
                    },
                  ]}
                />
              ) : null,
          }}
        />
        <Components.Post.Navigation newer={newer} older={older} />
      </Components.Post.Content>
    </Components.View>
  );
}

export default Page;
