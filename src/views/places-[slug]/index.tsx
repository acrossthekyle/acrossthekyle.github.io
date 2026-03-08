import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Map, MapMarker } from '@/ui/map';
import { Heading, Small, Strong } from '@/ui/typography';

import Snapshots from './snapshots';
import Stats from './stats';
import styles from './stylesheet';
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
              ..
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/places">
              /places
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{data.title}</Strong>
        <Small>
          {data.type} • {data.location} • {data.year}
        </Small>
      </Heading>
      {data.description.map((paragraph) => (
        <p key={paragraph}>
          {paragraph}
        </p>
      ))}
      <Stats stats={data.stats} />
      <Map>
        <MapMarker position={data.position} />
      </Map>
      <Snapshots images={data.images} slug={data.slug} total={data.total} />
      {!data.isDestination && (
        <>
          <Heading level={2} id="gpx">
            <Strong uppercase>Metrics</Strong>
            <Small>{data.stages.length} {data.label}s</Small>
          </Heading>
          <ul aria-labelledby="gpx" className={styles.gpx}>
            {data.stages.map((stage) => (
              <li key={stage.index}>
                <Link
                  className={styles.link}
                  href={`/gpx/${data.slug}/${stage.index}`}
                >
                  <Strong>[→] {data.label} {stage.index}:</Strong>
                  <span className={styles.title}>{stage.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}
