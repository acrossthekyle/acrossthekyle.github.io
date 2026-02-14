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

import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>Gear</strong>
        <small>What I carry</small>
      </h1>
      <p>
        From Spain to the TMB, and from Nepal to Patagonia, this is a list of the various gear that I've carried with me on my backpacking trips.
      </p>
      <OrderedList>
        {data.map((item) => (
          <OrderedListItem key={item.index}>
            <OrderedListLink href={`/gear/${item.slug}`}>
              <OrderedListTag>#{item.index}</OrderedListTag>
              <OrderedListTitle>
                {item.title} {item.date}
              </OrderedListTitle>
              <OrderedListSubtitle>
                Base weight: {item.base} lbs
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
