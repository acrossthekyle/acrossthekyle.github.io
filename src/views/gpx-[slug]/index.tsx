import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Stats, StatsItem } from '@/ui/stats';
import { Heading, Small, Strong } from '@/ui/typography';

import Elevation from './elevation';
import Stat from './stat';
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
          {data.back.map(({ text, uri }) => (
            <BreadcrumbItem key={uri}>
              <Link href={uri}>
                {text}
              </Link>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{data.title}</Strong>
        <Small>{data.subTitle}</Small>
      </Heading>
      <Stats columns={3}>
        {data.metrics.map((stat) => (
          <StatsItem key={stat.label}>
            <Stat label={stat.label} value={stat.value} />
          </StatsItem>
        ))}
      </Stats>
      <Elevation elevation={data.elevation} stats={data.metrics} />
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
