import Link from 'next/link';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

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
  tags: string[];
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
};

export const getServerSideProps = async (request) => {
  const id = request.query.post.toLowerCase();
  const stage = request.query.stage;

  try {
    const metaModule = await import(`@/cache/posts/${id}/stages/${stage}/meta`);
    const meta = metaModule.meta;

    const contentModule = await import(
      `@/cache/posts/${id}/stages/${stage}/content`
    );
    const content = contentModule.content;

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
