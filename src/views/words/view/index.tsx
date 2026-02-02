import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkCount, LinkList, LinkStacked } from '@/ui/link';

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
      <section aria-label="introduction">
        <p>
          A place where I share my thoughts, opinions, and reflections on the things I notice.
        </p>
      </section>
      <section aria-label="words navigation">
        <LinkList>
          {data.map((item) => (
            <li key={item.slug}>
              <LinkStacked href={`/words/${item.slug}`}>
                <LinkCount>{item.index}</LinkCount>
                {item.title}
                <small>{item.date}</small>
              </LinkStacked>
            </li>
          ))}
        </LinkList>
      </section>
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
