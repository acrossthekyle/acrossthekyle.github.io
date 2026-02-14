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
      <h1>
        <strong>Places</strong>
        <small>Trails and travels</small>
      </h1>
      <Wiki />
      <Map>
        {data.map(({ position }) => position).map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
      </Map>
      <p>
        From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles, explored numerous destinations, and seen some amazing things.
      </p>
      <OrderedList>
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
