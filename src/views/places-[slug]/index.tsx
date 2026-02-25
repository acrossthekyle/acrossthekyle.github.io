import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import Snapshots from './snapshots';
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
      <h1>
        <strong>{data.title}</strong>
        <small>
          {data.type} • {data.location} • {data.year}
        </small>
      </h1>
      {data.description.map((paragraph) => (
        <p key={paragraph}>
          {paragraph}
        </p>
      ))}
      <ul aria-label="stats" className={styles.stats}>
        {data.stats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.label}</strong>
            <small>{stat.value}</small>
          </li>
        ))}
      </ul>
      <Snapshots images={data.images} slug={data.slug} total={data.total} />
      {data.type !== 'destination' && (
        <>
          <h2 id="gpx">
            <strong>METRICS</strong>
            <small>{data.stages.length} data sets</small>
          </h2>
          <ul aria-labelledby="gpx" className={styles.gpx}>
            {data.stages.map((stage) => (
              <li key={stage.index}>
                <Link
                  className={styles.link}
                  href={`/gpx/${data.slug}/${stage.index}`}
                >
                  <strong>[→]</strong> {data.label} {stage.index}: {stage.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}
