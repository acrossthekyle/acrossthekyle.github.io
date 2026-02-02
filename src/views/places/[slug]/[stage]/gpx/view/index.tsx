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
    <Layout group="places">
      <article>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/places">
                ../Places
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/places/${data.slug}`}>
                <BreadcrumbTruncate text={data.parent.join(' ')} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/places/${data.slug}/${data.index}`}>
                {data.index}
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2>
          <strong>Route and Elevation</strong>
          <small>GPX data via GPS Smart Watch</small>
        </h2>
        <section aria-label="gpx data">
          <Context>
            <Elevation gpx={data.gpx} stats={data.stats} termini={data.termini} />
            <Route gpx={data.gpx} />
          </Context>
        </section>
      </article>
    </Layout>
  );
}
