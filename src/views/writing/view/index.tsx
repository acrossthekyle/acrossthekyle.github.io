import Markdown from 'react-markdown';

import { Layout } from '@/layout';

import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout group="writing">
      <header>
        <h1>
          <strong>
            Writing
          </strong>
          <small>
            <em>Thinking out loud</em>
          </small>
        </h1>
        <p>
          This space is for exploring ideas, and giving a glimpse into how I see the world. A place where I share my thoughts, opinions, and reflections on the things that matter to me.
        </p>
      </header>
      {data.map((item) => (
        <article key={item.title}>
          <h2>
            <strong>{item.title}</strong>
            <small><em>{item.date}</em></small>
          </h2>
          <Markdown>{item.content}</Markdown>
        </article>
      ))}
    </Layout>
  );
}
