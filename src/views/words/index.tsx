import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

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
      <nav aria-label="supplementary navigation">
        <ol className="index">
          {data.map((item) => (
            <li key={item.slug}>
              <Link className="backdrop" href={`/words/${item.slug}`}>
                <span className="tag">#{item.index}</span>
                {item.title}
                <small>{item.date} &mdash; {item.readingTime} min read</small>
              </Link>
            </li>
          ))}
        </ol>
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
