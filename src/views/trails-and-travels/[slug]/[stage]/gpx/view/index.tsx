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
                <BreadcrumbEllipsis />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/trails-and-travels/${data.slug}`}>
                <BreadcrumbEllipsis />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/trails-and-travels/${data.slug}/${data.index}`}>
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
          <small>Route and elevation profile</small>
        </h1>
      </header>
      <Context>
        <Elevation gpx={data.gpx} stats={data.stats} termini={data.termini} />
        <Route gpx={data.gpx} />
      </Context>
    </Layout>
  );
}
