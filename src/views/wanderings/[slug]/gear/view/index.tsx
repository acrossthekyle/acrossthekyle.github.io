import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';

import type { Data } from './types';

type Props = {
  data: Data;
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
              <Link href="/wanderings">
                Wanderings
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/wanderings/${data.slug}`}>
                <BreadcrumbTruncate text={data.title.join(' ')} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Gear
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Gear</strong>
          <small>Pack, shelter, clothing</small>
        </h1>
      </header>
      {data.categories.map((category) => (
        <section className="mt-8 first:mt-0" key={category.title}>
          <h2>
            <small><strong>{category.title}</strong></small>
          </h2>
          <ul className="">
            {category.items.map((item, index: number) => (
              <li className="inline capitalize mr-4 last:mr-0" key={index}>
                {!!item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                  >
                    <small>{item.name.join(' ')}</small>
                  </Link>
                ) : (
                  <small>{item.name.join(' ')}</small>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Layout>
  );
}
