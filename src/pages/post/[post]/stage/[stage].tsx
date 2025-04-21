import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

import { posts } from '@/cache/posts';
import Components from '@/components';
import type { Posts } from '@/types';
import { routeFromGpx } from '@/utils/files';
import { trimGpxCoordinates } from '@/utils/posts';

const components = {
  Gallery: Components.Post.Gallery,
  Route: Components.Post.Route,
  Stats: Components.Post.Stats,
};

type Meta = {
  id: string;
  uri: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  breadcrumbs: Posts.Breadcrumb[];
  route: string;
  gain: string;
  loss: string;
  miles: string;
  time: string;
  next?: string;
  previous?: string;
};

type Stage = {
  data: Meta;
  source: string;
};

async function getStage(post: string, stage: string) {
  const filePath = path.join(
    path.join(process.cwd(), './src/posts'),
    `${post}/stages/${stage}.mdx`,
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
  const { data, source } = await getStage(
    request.query.post.toLowerCase(),
    request.query.stage,
  );

  const post = posts.find((post) => post.id === data.parent);

  let newer = null;
  let older = null;

  if (data.next) {
    newer = post?.stages
      .filter((stage) => stage.id === data.next)
      .map((stage) => ({
        image: stage.image,
        title: stage.title,
        uri: stage.uri,
      }))[0];
  }

  if (data.previous) {
    older = post?.stages
      .filter((stage) => stage.id === data.previous)
      .map((stage) => ({
        image: stage.image,
        title: stage.title,
        uri: stage.uri,
      }))[0];
  }

  const stats = {
    gain: data.gain,
    loss: data.loss,
    miles: data.miles,
    time: data.time.split(','),
  };

  let route = null;

  if (data.route) {
    const gpx = await routeFromGpx(`${data.route}.gpx`);

    route = {
      route: trimGpxCoordinates(gpx),
      start: data.title.split(' to ')[0],
      stop: data.title.split(' to ')[1],
    };
  }

  return {
    props: {
      meta: {
        ...data,
        breadcrumbs: [
          {
            title: post.title,
            uri: post.uri,
          },
          {
            title: 'Stages',
            uri: `${post.uri}#timeline`,
          },
        ],
        tags: data.tags.split(','),
      },
      newer,
      older,
      route,
      source,
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
  stats: Posts.Stats;
};

function Page({ meta, newer, older, route, source, stats }: Props) {
  return (
    <Components.View title={meta.title}>
      <Components.Post.Title
        author={meta.author}
        breadcrumbs={meta.breadcrumbs}
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
            Stats: () => (stats ? <Components.Post.Stats {...stats} /> : null),
          }}
        />
        <Components.Post.Navigation
          newer={newer}
          newerLabel="Next Stage"
          older={older}
          olderLabel="Previous Stage"
        />
      </Components.Post.Content>
    </Components.View>
  );
}

export default Page;
