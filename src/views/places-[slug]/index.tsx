import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

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
            {stat.label}
            <small>{stat.value}</small>
          </li>
        ))}
      </ul>
      <Snapshots images={data.images} total={data.total} />
      {data.type.toLowerCase() !== 'destination' && (
        <>
          <h2>
            <strong>GPX</strong>
            <small>{data.stages.length} data sets</small>
          </h2>
          <ul>
            {data.stages.map((stage) => (
              <li key={stage.index}>
                <Details
                  date={stage.date}
                  index={stage.index}
                  slug={data.slug}
                  title={stage.title}
                  total={data.total}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}
