import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>Route and elevation</strong>
        <small>GPX data via smart watch</small>
      </h1>
      <section aria-label="elevation and route data">
        <Context>
          <Elevation gpx={data.gpx} stats={data.stats} />
          <Route gpx={data.gpx} />
        </Context>
      </section>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={`/places/${data.slug}/${data.index}`}>
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
