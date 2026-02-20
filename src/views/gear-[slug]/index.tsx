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
  ListItem,
  ListLink,
  ListSubtitle,
  ListTag,
  ListTitle,
  ListUnordered,
} from '@/ui/list';

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
        <strong>{data.title}</strong>
        <small>{data.date} • {data.total} lbs</small>
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
          <ListUnordered labelledBy={category.title.replace(' ', '-')}>
            {category.items.map((item, index: number) => (
              <ListItem key={index}>
                {!!item.link ? (
                  <ListLink href={item.link} target="_blank">
                    <ListTitle>
                      {item.name.join(' ')}
                    </ListTitle>
                    <ListSubtitle>
                      {item.consumable && `Consumable • `}
                      {item.worn && `Worn • `}
                      {(!item.worn && !item.consumable) && `Base • `}
                      {item.weight} oz
                    </ListSubtitle>
                    <ListTag>
                      <LinkArrow>Shop</LinkArrow>
                    </ListTag>
                  </ListLink>
                ) : (
                  <>
                    <ListTitle>{item.name.join(' ')}</ListTitle>
                    <ListSubtitle>
                      {item.consumable && `Consumable • `}
                      {item.worn && `Worn • `}
                      {(!item.worn && !item.consumable) && `Base • `}
                      {item.weight} oz
                    </ListSubtitle>
                  </>
                )}
              </ListItem>
            ))}
          </ListUnordered>
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
