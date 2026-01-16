import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';

import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout group="wanderings">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Wanderings
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Always moving forward</strong>
          <small>Experiencing new sights and sounds keeps me moving</small>
        </h1>
        <p>
          Nothing inspires me more than leaving the crowded city behind and
          heading into nature with everything I need on my back. Having hiked
          thousands of miles, I know <em>I can do anything</em>.
        </p>
      </header>
      <ul aria-label="wanderings navigation">
        {data.map((item, index: number) => (
          <li className="mt-8 first:mt-0" key={index}>
            <Link
              className="block"
              href={`/wanderings/${item.slug}`}
              id={index === 0 ? 'skip-to' : undefined}
            >
              <strong>{item.title.join(' ')}</strong>
              <small>{item.location} &mdash; {item.date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
