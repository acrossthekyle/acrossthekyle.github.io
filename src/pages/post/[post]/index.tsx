import Link from 'next/link';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { posts } from '@/cache/posts';
import Components from '@/components';
import type { Posts } from '@/types';
import { transformStagesForTimeline } from '@/utils/components';

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
  categories: string[];
  author: string;
  date: string;
  image: string;
  location: string;
  snippet: string;
  marker?: Posts.Marker;
  next?: string;
  newer: Posts.Newer | null;
  older: Posts.Older | null;
  previous?: string;
  stats: Posts.Stats | null;
};

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => post.uri),
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.post.toLowerCase();

  try {
    const metaModule = await import(`@/cache/posts/${id}/meta`);
    const meta = metaModule.meta;

    const contentModule = await import(`@/cache/posts/${id}/content`);
    const content = await serialize(contentModule.content);

    let route = null;
    let stages = null;

    try {
      const routeModule = await import(`@/cache/posts/${id}/route`);
      route = {
        ...meta.route,
        route: routeModule.route,
      };

      const stagesModule = await import(`@/cache/posts/${id}/stages/meta`);
      stages = stagesModule.meta;
    } catch (error) {
      // ignore failures on stages and routes: not all posts have them
    }

    return {
      props: {
        content,
        meta,
        route,
        stages,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

type Props = {
  content: MDXRemoteSerializeResult;
  meta: Meta;
  route: Posts.Route | null;
  stages: Posts.Stage[] | null;
};

function Page({ content, meta, route, stages }: Props) {
  if (!meta) {
    return null;
  }

  return (
    <Components.View
      metadata={{
        title: `Post | ${meta.title}`,
        description: meta.snippet,
        url: meta.uri,
      }}
    >
      <Components.Post.Title
        author={meta.author}
        categories={meta.categories}
        date={meta.date}
        title={meta.title}
      />
      <Components.Post.Hero image={meta.image} />
      <Components.Post.Content>
        <MDXRemote
          {...content}
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
            Stats: () =>
              meta.stats ? <Components.Post.Stats {...meta.stats} /> : null,
            World: () =>
              meta.marker ? <Components.World markers={[meta.marker]} /> : null,
          }}
        />
        <Components.Post.Navigation newer={meta.newer} older={meta.older} />
      </Components.Post.Content>
    </Components.View>
  );
}

export default Page;
