import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkBackdrop } from '@/ui/link';
import {
  Grid,
  GridList,
  GridListItem,
} from '@/ui/navigation/grid';

import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1 id="gear">
        <strong>{route('packs').text}</strong>
        <small>{route('packs').subtitle}</small>
      </h1>
      <p>
        Weight plays a critical role in the success of a backpacking trip. The most important types of weight are Base Weight, Worn Weight, and Consumable Weight. It sounds technical, but it's really just a way of understanding what contributes to the overall pack weight.
      </p>
      <p>
        From Nepal to Patagonia, this is a list of the packs I've carried with me on my various backpacking trips.
      </p>
      {data.map((group) => (
        <Fragment key={group.id}>
          <h2 id={group.id}>
            <strong>{group.name.toUpperCase()}S</strong>
            <small>
              {group.count} pack{group.count > 1 ? 's' : ''}
            </small>
          </h2>
          <Grid>
            <GridList columns={2} id={group.id}>
              {group.items.map((item) => (
                <GridListItem key={item.slug}>
                  <LinkBackdrop href={`/gear/${item.slug}`}>
                    <strong>{item.title}</strong>
                    <small>{item.date} • {item.base} lbs</small>
                  </LinkBackdrop>
                </GridListItem>
              ))}
            </GridList>
          </Grid>
        </Fragment>
      ))}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
