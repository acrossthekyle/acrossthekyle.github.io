import Link from 'next/link';
import { Fragment } from 'react';

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
        <strong>Gear list</strong>
        <small>Base weight: {data.weights.base} lbs</small>
      </h1>
      <p>
        This is a list of the gear used for the {data.title} broken down by category.
      </p>
      {data.categories.map((category) => (
        <Fragment key={category.title}>
          <h2 id={category.title.replace(' ', '-')}>
            <strong>{category.title}</strong>
            <small>{category.weight} lbs</small>
          </h2>
          <ul aria-labelledby={category.title.replace(' ', '-')}>
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
        </Fragment>
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
