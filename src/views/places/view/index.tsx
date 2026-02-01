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
          <small>Trails and travels</small>
        </h2>
        <p>
          I've spent years thru-hiking trails and jetsetting off to unique destinations. Below are some of the routes and travels I've experienced.
        </p>
        <Filter data={data} onChange={handleOnFilter} />
        <LinkList>
          {items.map((item) => (
            <li key={item.index}>
              <LinkStacked href={`/places/${item.slug}`}>
                <LinkCount>{item.index}</LinkCount>
                {item.title.join(' ')}
                <small>
                  {item.location} &mdash; <DateRange date={item.date} />
                </small>
              </LinkStacked>
            </li>
          ))}
        </LinkList>
      </article>
    </Layout>
  );
}
