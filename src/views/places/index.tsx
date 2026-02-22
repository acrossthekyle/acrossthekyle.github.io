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
import { Map, MapMarker } from '@/ui/map';
import {
  Grid,
  GridList,
  GridListItem,
} from '@/ui/navigation/grid';

import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1 id="places">
        <strong>{route('places').text}</strong>
        <small>{route('places').subtitle}</small>
      </h1>
      <Map>
        {data.markers.map((marker) => (
          <MapMarker
            href={`/places/${marker.slug}`}
            key={marker.slug}
            position={marker.position}
            title={marker.title}
          />
        ))}
      </Map>
      <p>
        A collection of hikes and destinations.
      </p>
      {data.groups.map((group) => (
        <Fragment key={group.id}>
          <h2 id={group.id}>
            <strong>{group.name.toUpperCase()}</strong>
            <small>
              {group.types.map((type) => `${type.name} (${type.count})`).join(', ')}
            </small>
          </h2>
          <Grid>
            <GridList columns={2} id={group.id}>
              {group.items.map((item) => (
                <GridListItem key={item.index}>
                  <LinkBackdrop href={`/places/${item.slug}`}>
                    <strong>{item.title}</strong>
                    <small>{item.type} • {item.location} • {item.date}</small>
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
