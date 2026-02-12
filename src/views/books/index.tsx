import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import { BOOKS } from './constants';

export default function View() {
  return (
    <Layout>
      <h1 id="books">
        <strong>Books</strong>
        <small>Printed reads</small>
      </h1>
      <p>
        The printed words that I've read over the years, in no particular order.
      </p>
      <br /><br />
      <ul aria-labelledby="books">
        {BOOKS.map(({ author, title }) => (
          <li key={`${author}-${title}`}>
            "{title}" by {author}
          </li>
        ))}
      </ul>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
