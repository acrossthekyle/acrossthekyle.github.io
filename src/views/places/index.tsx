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
        </BreadcrumbList>
      </Breadcrumb>
      <Heading id="places">
        <Strong>{route('places').text}</Strong>
        <Small>{route('places').subtitle}</Small>
      </Heading>
      <p>
        Since 2015 I've travelled to nearly every continent on our little blue ball, and completed several thru-hikes on most of them. I'm also working on bagging all of the Colorado 14er peaks. This is a collection of those experiences.
      </p>
      {data.recent && (
        <p>
          Most recent: <Link href={`/places/${data.recent.id}`}><u>{data.recent.title}</u></Link>
        </p>
      )}
      {data.groups.map((group) => (
        <Fragment key={group.id}>
          <Heading level={2} id={group.id}>
            <Strong uppercase>{group.name}</Strong>
            <Small>
              {group.types.map((type) => `${type.name} (${type.count})`).join(', ')}
            </Small>
          </Heading>
          <Grid>
            <GridList columns={2} id={group.id}>
              {group.items.map((item) => (
                <GridListItem key={item.index}>
                  <LinkBackdrop href={`/places/${item.id}`}>
                    <Strong>{item.title}</Strong>
                    <Small>
                      {item.type} • {item.location} • {item.date}
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
