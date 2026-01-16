import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import Stats from './stats';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="wanderings">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbEllipsis />
            <BreadcrumbSeparator />
            <BreadcrumbEllipsis />
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/wanderings/${data.slug}/${data.index}`}>
                <BreadcrumbTruncate text={data.title.join(' ')} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                GPX
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>GPX Data</strong>
          <small>
            Route, elevation, and stats
          </small>
        </h1>
      </header>
      <section aria-label="route and elevation profile">
        <Context>
          <Route gpx={data.gpx} />
          <Elevation gpx={data.gpx} />
        </Context>
      </section>
      <Stats gpx={data.gpx} stats={data.stats} termini={data.termini} />
    </Layout>
  );
}
