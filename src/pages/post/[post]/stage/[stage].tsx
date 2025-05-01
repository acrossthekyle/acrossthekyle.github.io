import Link from 'next/link';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { posts } from '@/cache/posts';
import Components from '@/components';
import type { Posts } from '@/types';

const components = {
  Gallery: Components.Post.Gallery,
  Route: Components.Post.Route,
  Stats: Components.Post.Stats,
};

type Meta = {
  id: string;
  uri: string;
  title: string;
  categories: string[];
  author: string;
  date: string;
  image: string;
  breadcrumbs: Posts.Breadcrumb[];
  route: Posts.Route;
  gain: string;
  loss: string;
  miles: string;
  time: number | number[];
  newer: Posts.Newer | null;
  older: Posts.Older | null;
  next?: string;
  previous?: string;
  readingTime: number;
};

export async function getStaticPaths() {
  let paths = [];

  await Promise.all(
    posts.map(async (post) => {
      try {
        const stagesModule = await import(
          `@/cache/posts/${post.uri.replace('/post/', '')}/stages/meta`
        );

        stagesModule.meta.forEach((stage) => {
          if (stage.uri) {
            paths.push(stage.uri);
          }
        });
      } catch (error) {
        // ignore posts that don't have stages
      }
    }),
  );

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.post.toLowerCase();
  const stage = context.params.stage;

  try {
    const metaModule = await import(`@/cache/posts/${id}/stages/${stage}/meta`);
    const meta = metaModule.meta;

    const contentModule = await import(
      `@/cache/posts/${id}/stages/${stage}/content`
    );
    const content = await serialize(contentModule.content);

    const routeModule = await import(
      `@/cache/posts/${id}/stages/${stage}/route`
    );
    const route = routeModule.route;

    return {
      props: {
        content,
        meta,
        route: {
          ...meta.route,
          route,
        },
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
  route: Posts.Route;
};

function Page({ content, meta, route }: Props) {
  if (!meta) {
    return null;
  }

  return (
    <Components.View
      metadata={{
        title: `Post | ${meta.breadcrumbs
          .filter((crumb) => crumb.title !== 'Stages')
          .map((crumb) => crumb.title)
          .join(' - ')} - ${meta.title}`,
        description: meta.title,
        url: meta.uri,
      }}
    >
      <Components.Post.Title
        author={meta.author}
        breadcrumbs={meta.breadcrumbs}
        categories={meta.categories}
        date={meta.date}
        readingTime={meta.readingTime}
        title={meta.title}
      />
      <Components.Post.Hero image={meta.image} />
      <Components.Post.Content>
        <MDXRemote
          {...content}
          components={{
            ...components,
            Route: () => <Components.Post.Route {...route} />,
            Stats: () => (
              <Components.Post.Stats
                gain={meta.gain}
                loss={meta.loss}
                miles={meta.miles}
                time={meta.time}
              />
            ),
          }}
        />
        <Components.Post.Navigation
          newer={meta.newer}
          newerLabel="Next Stage"
          older={meta.older}
          olderLabel="Previous Stage"
        />
      </Components.Post.Content>
    </Components.View>
  );
}

export default Page;
