'use client';

import { Layout } from '@/layout';
import { DateRange } from '@/ui/date';
import { LinkCount, LinkList, LinkStacked } from '@/ui/link';

import Filter from './filter';
import { useModel } from './model';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { handleOnFilter, items } = useModel(data);

  return (
    <Layout group="places">
      <article>
        <h2>
          <strong>Places</strong>
        </h2>
        <p>
          From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles and witnessed some amazing things. Wandering is life, and the trail keeps pulling me coming back for more. These are the trails and travels I've experienced over the years.
        </p>
        <Filter data={data} onChange={handleOnFilter} />
        <LinkList>
          {items.map((item) => (
            <li key={item.index}>
              <LinkStacked href={`/places/${item.slug}`}>
                <LinkCount>{item.index}</LinkCount>
                <strong>{item.title.join(' ')}</strong>
                <small>
                  {item.location} &mdash; <DateRange date={item.date} preview />
                </small>
              </LinkStacked>
            </li>
          ))}
        </LinkList>
      </article>
    </Layout>
  );
}
