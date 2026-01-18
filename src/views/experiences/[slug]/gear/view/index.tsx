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

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="experiences">
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
              <Link href="/experiences">
                Experiences
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/experiences/${data.slug}`}>
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
        <section className={styles.section} key={category.title}>
          <h2>
            <strong>
              <small>{category.title}</small>
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
