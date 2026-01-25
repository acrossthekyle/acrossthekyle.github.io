'use client';

import { Layout } from '@/layout';
import { DateRange } from '@/ui/date';
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
        From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles and witnessed some amazing things. Wandering is life, and the thrill keeps me coming back for more. These are just some of the trails, and travels, that I've experienced over the years.
      </p>
      <Filter data={data} onChange={handleOnFilter} />
      <nav aria-label="trails and travels navigation">
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.index}>
              <LinkStacked href={`/trails-and-travels/${item.slug}`}>
                <strong>{item.title.join(' ')}</strong>
                <small>
                  <em><DateRange date={item.date} /> &mdash; {item.location}</em>
                </small>
              </LinkStacked>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
}
