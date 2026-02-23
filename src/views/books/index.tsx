import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import { BOOKS } from './constants';

export default function View() {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 id="books">
        <strong>{route('books').text}</strong>
        <small>{route('books').subtitle}</small>
      </h1>
      <ul>
        {BOOKS.map((item, index: number) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <small>{item.author}</small>
            {(index < BOOKS.length - 1 )&& <hr />}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
