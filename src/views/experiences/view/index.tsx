'use client';

import Link from 'next/link';

import { Layout } from '@/layout';
import { Badge } from '@/ui/badge';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';

import Filter from './filter';
import { useModel } from './model';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { handleOnFilter, items } = useModel(data);

  return (
    <Layout group="experiences">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" id="skip-to">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Experiences
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Wandering is Life</strong>
          <small>
            Experiencing new sights and sounds keeps me moving forward.
          </small>
        </h1>
        <p>
          I love leaving the crowded city behind and heading into nature with
          everything I need on my back, letting the trail remind me how little
          it actually takes to feel whole. I've thru-hiked a lot of miles, and
          one thing's always been true: <em>if I can see it, I can make it</em>.
        </p>
      </header>
      <Filter data={data} onChange={handleOnFilter} />
      <ul aria-label="experiences navigation" className={styles.list}>
        {items.map((item) => (
          <li key={item.index}>
            <Link
              className={styles.link}
              href={`/experiences/${item.slug}`}
            >
              <strong>{item.title.join(' ')}</strong>
              <Badge>{item.type}</Badge><small>{item.location}</small>
              <small className={styles.date}>{item.date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
