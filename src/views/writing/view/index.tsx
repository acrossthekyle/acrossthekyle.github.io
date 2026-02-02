import { Layout } from '@/layout';
import { LinkCount, LinkList, LinkStacked } from '@/ui/link';

import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout group="writing">
      <article>
        <h2>
          <strong>Writing</strong>
        </h2>
        <p>
          A place where I share my thoughts, opinions, and reflections on the things I notice.
        </p>
      </article>
      <section aria-label="writing navigation">
        <LinkList>
          {data.map((item) => (
            <li key={item.slug}>
              <LinkStacked href={`/writing/${item.slug}`}>
                <strong>
                  <LinkCount>{item.index}</LinkCount>
                  {item.title}
                </strong>
                <small>{item.date}</small>
              </LinkStacked>
            </li>
          ))}
        </LinkList>
      </section>
    </Layout>
  );
}
