import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>Gear List</strong>
        <small>Base weight: {data.weights.base} lbs</small>
      </h1>
      {data.categories.map((category) => (
        <section className={styles.section} key={category.title}>
          <h2>
            <strong>{category.title}</strong>
            <small>{category.weight} lbs</small>
          </h2>
          <ul>
            {category.items.map((item, index: number) => (
              <li className={styles.item} key={index}>
                {!!item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                  >
                    <LinkArrow>{item.name.join(' ')}</LinkArrow>
                  </Link>
                ) : (
                  <>{item.name.join(' ')}</>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={`/places/${data.slug}`}>
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
