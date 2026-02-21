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
  TimelineHeader,
  TimelineHeading,
  TimelineItem,
  TimelineItems,
  TimelineLine,
  TimelineToggle,
} from '@/ui/timeline';

import Details from './details';
import Snapshots from './snapshots';
import styles from './stylesheet';
import type { Data } from './types';
import Wiki from './wiki';

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
      <ul aria-label="stats" className={styles.stats}>
        {data.stats.map((stat) => (
          <li key={stat.label}>
            {stat.label}
            {stat.label.toLowerCase() === 'type' && (
              <Wiki type={stat.value} />
            )}
            <small>{stat.value}</small>
          </li>
        ))}
      </ul>
      {data.type.toLowerCase() !== 'destination' && (
        <Timeline total={data.stages.length}>
          <TimelineHeader>
            <strong>{data.label}s</strong>
          </TimelineHeader>
          <TimelineItems>
            {data.stages.map((stage, index: number) => (
              <TimelineItem index={index} key={stage.index}>
                <TimelineLine />
                <TimelineDate>
                  {stage.index}/{data.total}
                </TimelineDate>
                <TimelineEntry>
                  <TimelineHeading>
                    {stage.title}
                    <small>{stage.date}</small>
                  </TimelineHeading>
                  <ul className={styles.list}>
                    {stage.stats.map((stat, index: number) => (
                      <li className={styles.item} key={index}>
                        {stat.label}
                        <small>{stat.value}</small>
                      </li>
                    ))}
                  </ul>
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
          </TimelineItems>
          {data.stages.length > 6 && (
            <TimelineToggle />
          )}
        </Timeline>
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
