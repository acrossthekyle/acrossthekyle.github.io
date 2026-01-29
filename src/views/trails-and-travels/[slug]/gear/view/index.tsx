import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="trails-and-travels">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/trails-and-travels">
                <BreadcrumbTruncate text="Trails and Travels" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/trails-and-travels/${data.slug}`}>
                <BreadcrumbTruncate text={data.title.join(' ')} />
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>
            The Gear List
          </strong>
          <small>
            <em>Base weight: {data.weights.base} lbs</em>
          </small>
        </h1>
      </header>
      {data.categories.map((category) => (
        <section className={styles.section} key={category.title}>
          <h2>
            <strong>
              {category.title}
            </strong>
          </h2>
          <ul>
            {category.items.map((item, index: number) => (
              <li className={styles.item} key={index}>
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
