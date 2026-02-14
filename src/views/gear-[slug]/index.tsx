import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';
import {
  OrderedList,
  OrderedListItem,
  OrderedListLink,
  OrderedListSubtitle,
  OrderedListTag,
  OrderedListTitle,
} from '@/ui/lists/ordered';

import Graph from './graph';
import styles from './stylesheet';
import type { Data } from './types';
import Wiki from './wiki';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1 className={styles.header}>
        <strong>{data.title} {data.date}</strong>
        <small>Total weight &mdash; {data.total} lbs</small>
      </h1>
      <Wiki />
      <Graph
        base={data.base}
        consumable={data.consumable}
        slug={data.slug}
        total={data.total}
        type={data.type}
        worn={data.worn}
      />
      {data.categories.map((category) => (
        <Fragment key={category.title}>
          <h2 className={styles.heading} id={category.title.replace(' ', '-')}>
            <strong>{category.title}</strong>
            <small>{category.weight} lbs</small>
          </h2>
          <OrderedList labelledBy={category.title.replace(' ', '-')}>
            {category.items.map((item, index: number) => (
              <OrderedListItem key={index}>
                {!!item.link ? (
                  <OrderedListLink href={item.link} target="_blank">
                    <OrderedListTitle>
                      {item.name.join(' ')}
                    </OrderedListTitle>
                    <OrderedListSubtitle>
                      {item.consumable && `Consumable • `}
                      {item.worn && `Worn • `}
                      {(!item.worn && !item.consumable) && `Base • `}
                      {item.weight} oz
                    </OrderedListSubtitle>
                    <OrderedListTag>
                      <LinkArrow>Buy</LinkArrow>
                    </OrderedListTag>
                  </OrderedListLink>
                ) : (
                  <>
                    <OrderedListTitle>{item.name.join(' ')}</OrderedListTitle>
                    <OrderedListSubtitle>
                      {item.consumable && `Consumable • `}
                      {item.worn && `Worn • `}
                      {(!item.worn && !item.consumable) && `Base • `}
                      {item.weight} oz
                    </OrderedListSubtitle>
                  </>
                )}
              </OrderedListItem>
            ))}
          </OrderedList>
        </Fragment>
      ))}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/gear">
              gear
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
