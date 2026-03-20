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
import { Heading, Small, Strong } from '@/ui/typography';
import { Weight } from '@/ui/units';

import type { Data } from './types';

type Props = {
  data: Data[];
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
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{route('packs').text}</Strong>
        <Small>{route('packs').subtitle}</Small>
      </Heading>
      <p>
        These are the various gear loadouts from my thru-hikes, section hikes, and summits with the base weight listed under each. I'm always swapping items and trying new combinations in a never-ending effort to become as ultralight as possible in order to make the experience more enjoyable.
      </p>
      <p>
        Ounces lead to pounds and pounds lead to pain.
      </p>
      {data.map((group) => (
        <Fragment key={group.id}>
          <Heading level={2} id={group.id}>
            <Strong uppercase>{group.name}s</Strong>
            <Small>
              {group.count} pack{group.count > 1 ? 's' : ''}
            </Small>
          </Heading>
          <Grid>
            <GridList columns={2} id={group.id}>
              {group.items.map((item) => (
                <GridListItem key={item.slug}>
                  <LinkBackdrop href={`/gear/${item.slug}`}>
                    <strong>{item.title}</strong>
                    <Small>
                      {item.date} • <Weight weight={item.base} />
                    </Small>
                  </LinkBackdrop>
                </GridListItem>
              ))}
            </GridList>
          </Grid>
        </Fragment>
      ))}
    </Layout>
  );
}
