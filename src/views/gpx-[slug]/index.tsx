import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import Elevation from './elevation';
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
              places/
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/places/${data.slug}`}>
              {data.place}/
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/places/${data.slug}#gpx`}>
              metrics
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>
        <strong>
          {data.place} {data.label} #{data.index}: {data.title}
        </strong>
        <small>{data.date} • {data.location}</small>
      </h1>
      <ul aria-label="stats" className={styles.stats}>
        {data.metrics.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.label}</strong>
            <small>{stat.value}</small>
          </li>
        ))}
      </ul>
      <h2>
        <strong>ELEVATION</strong>
      </h2>
      <Elevation gpx={data.gpx} />
      {data.hasNavigation && (
        <nav aria-label="gpx supplementary navigation" className={styles.nav}>
          {!!data.previous && (
            <Link href={`/gpx/${data.slug}/${data.previous}`}>
              Previous
            </Link>
          )}
          {!!data.next && (
            <Link href={`/gpx/${data.slug}/${data.next}`}>
              Next
            </Link>
          )}
        </nav>
      )}
    </Layout>
  );
}
