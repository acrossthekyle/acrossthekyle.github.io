import { Layout } from '@/layout';
import { LinkStacked } from '@/ui/link';

import styles from './stylesheet';
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
            <em>Thoughts</em>
          </small>
        </h1>
        <p>
          This space is for exploring ideas, and giving a glimpse into how I see the world. A place where I share my thoughts, opinions, and reflections on the things that matter to me.
        </p>
      </header>
      <nav aria-label="writing navigation">
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.slug}>
              <LinkStacked href={`/writing/${item.slug}`}>
                <strong>
                  <span className={styles.index}>#{item.index}</span>
                  {item.title}
                  </strong>
                <small>
                  <em>{item.date}</em>
                </small>
              </LinkStacked>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
}
