import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Map, MapMarker } from '@/ui/map';
import {
  Timeline,
  TimelineDate,
  TimelineEntry,
  TimelineItem,
  TimelineLine,
} from '@/ui/timeline';

import Details from './details';
import Snapshots from './snapshots';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>{data.title}</strong>
        <small>
          {data.type} • {data.location} • {data.year}
        </small>
      </h1>
      <Map>
        <MapMarker position={data.position} />
      </Map>
      <h2>
        <strong>Overview</strong>
      </h2>
      {data.description.map((paragraph) => (
        <p key={paragraph}>
          {paragraph}
        </p>
      ))}
      <ul className={styles.stats}>
        {data.stats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.label}</strong>
            <small>{stat.value}</small>
          </li>
        ))}
      </ul>
      {data.type.toLowerCase() !== 'destination' && (
        <>
          <h2>
            <strong>{data.label}s</strong>
          </h2>
          <Timeline isPreview={data.stages.length > 6}>
            {data.stages.map((stage) => (
              <TimelineItem key={stage.index}>
                <TimelineLine />
                <TimelineDate>{stage.index}/{data.total}</TimelineDate>
                <TimelineEntry>
                  <p>
                    {stage.title}
                    <small>{stage.date}</small>
                    <small>{stage.stats.join(' • ')}</small>
                  </p>
                  <Details
                    index={stage.index}
                    label={data.label}
                    slug={data.slug}
                    title={stage.title}
                    total={data.total}
                  />
                </TimelineEntry>
              </TimelineItem>
            ))}
          </Timeline>
        </>
      )}
      <Snapshots images={data.images} total={data.total} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/places">
              places
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
