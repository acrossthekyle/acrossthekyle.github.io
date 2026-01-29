import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
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
    <Layout group="trails-and-travels">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/trails-and-travels">
                <BreadcrumbTruncate text="Trails and Travels" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/trails-and-travels/${data.slug}`}>
                <BreadcrumbTruncate text={data.parent.join(' ')} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/trails-and-travels/${data.slug}/${data.index}`}>
                <BreadcrumbTruncate text={`${data.label} ${data.index}`} />
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>
            Route and Elevation
          </strong>
          <small>
            <em>GPX data &mdash; Apple Watch Ultra 3</em>
          </small>
        </h1>
      </header>
      <Context>
        <Elevation gpx={data.gpx} stats={data.stats} termini={data.termini} />
        <Route gpx={data.gpx} />
      </Context>
    </Layout>
  );
}
