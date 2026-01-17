import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';

import type { Data } from './types';

type Props = {
  data: Data;
};

// eslint-disable-next-line unused-imports/no-unused-vars
export default function View({ data }: Props) {
  return (
    <Layout group="writing">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Writing
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Coming Soon</strong>
          <small>My thoughts and opinions.</small>
        </h1>
      </header>
      <article>
        <h2>
          <strong>Why I love Star Trek</strong>
          <small>Jan 17th, 2026</small>
        </h2>
        <p>
          It's for everybody...
        </p>
      </article>
    </Layout>
  );
}
