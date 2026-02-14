import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import {
  OrderedList,
  OrderedListItem,
  OrderedListLink,
  OrderedListSubtitle,
  OrderedListTag,
  OrderedListTitle,
} from '@/ui/lists/ordered';
import { Map, MapMarker } from '@/ui/map';

import type { Data } from './types';
import Wiki from './wiki';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1 id="places">
        <strong>Places</strong>
        <small>Trails and travels</small>
      </h1>
      <Wiki />
      <Map>
        {data.map(({ position, slug, title }, index) => (
          <MapMarker
            href={`/places/${slug}`}
            key={index}
            position={position}
            title={title}
          />
        ))}
      </Map>
      <p>
        From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles, explored numerous destinations, and seen some amazing things.
      </p>
      <nav aria-label="supplementary navigation">
        <OrderedList labelledBy="places">
          {data.map((item) => (
            <OrderedListItem key={item.index}>
              <OrderedListLink href={`/places/${item.slug}`}>
                <OrderedListTag>#{item.index}</OrderedListTag>
                <OrderedListTitle>
                  {item.title} {item.date}
                </OrderedListTitle>
                <OrderedListSubtitle>
                  {item.location} • {item.type}
                </OrderedListSubtitle>
              </OrderedListLink>
            </OrderedListItem>
          ))}
        </OrderedList>
      </nav>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
