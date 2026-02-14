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
        <strong>Words</strong>
        <small>Quick thoughts</small>
      </h1>
      <p>
        A place where I share my thoughts, opinions, and reflections on the things I notice.
      </p>
      <OrderedList>
        {data.map((item) => (
          <OrderedListItem key={item.slug}>
            <OrderedListLink href={`/words/${item.slug}`}>
              <OrderedListTag>#{item.index}</OrderedListTag>
              <OrderedListTitle>
                {item.title}
              </OrderedListTitle>
              <OrderedListSubtitle>
                {item.date} • {item.readingTime} min read
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
