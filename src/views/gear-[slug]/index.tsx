import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow, LinkBackdrop } from '@/ui/link';
import {
  Grid,
  GridList,
  GridListItem,
} from '@/ui/navigation/grid';

import Graph from './graph';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
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
      <h1>
        <strong>{data.title}</strong>
        <small>{data.date} • {data.total} lbs</small>
      </h1>
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
          <h2 id={category.title.replace(' ', '-')}>
            <strong>{category.title.toUpperCase()}</strong>
            <small>{category.items.length} items • {category.weight} lbs</small>
          </h2>
          <Grid>
            <GridList columns={2} id={category.title.replace(' ', '-')}>
              {category.items.map((item, index: number) => (
                <GridListItem key={index}>
                  {!!item.link ? (
                    <LinkBackdrop href={item.link} target="_blank">
                      <strong>{item.name.join(' ')}</strong>
                      <small>
                        <LinkArrow>
                          {item.consumable && `Consumable • `}
                          {item.worn && `Worn • `}
                          {(!item.worn && !item.consumable) && `Base • `}
                          {item.weight} oz • view
                        </LinkArrow >
                      </small>
                    </LinkBackdrop>
                  ) : (
                    <>
                      <strong>{item.name.join(' ')}</strong>
                      <small>
                        {item.consumable && `Consumable • `}
                        {item.worn && `Worn • `}
                        {(!item.worn && !item.consumable) && `Base • `}
                        {item.weight} oz
                      </small>
                    </>
                  )}
                </GridListItem>
              ))}
            </GridList>
          </Grid>
        </Fragment>
      ))}
    </Layout>
  );
}
