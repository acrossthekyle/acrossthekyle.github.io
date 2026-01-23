'use client';

import { Layout } from '@/layout';
import { LinkStacked } from '@/ui/link';

import Filter from './filter';
import { useModel } from './model';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { handleOnFilter, items } = useModel(data);

  return (
    <Layout group="trails-and-travels">
      <header>
        <h1>
          <strong>
            Trails and travels
          </strong>
          <small>
            A travelogue of my journeys
          </small>
        </h1>
      </header>
      <p>
        From Nepal's Himalayas to windswept Patagonia, I've hiked a lot of miles and witnessed some amazing things. Wandering is life, and the thrill keeps me coming back for more.
      </p>
      <Filter data={data} onChange={handleOnFilter} />
      <ul aria-label="trails and travels navigation" className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item.index}>
            <LinkStacked href={`/trails-and-travels/${item.slug}`} noMargin>
              <strong>{item.title.join(' ')}</strong>
              <small className={styles.subtitle}>
                <span>{item.location}</span>
                <span>{item.type}</span>
              </small>
            </LinkStacked>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
