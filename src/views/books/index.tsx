import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import {
  ListItem,
  ListTag,
  ListTitle,
  ListUnordered,
} from '@/ui/list';

import { BOOKS } from './constants';

export default function View() {
  return (
    <Layout>
      <h1 id="books">
        <strong>{route('books').text}</strong>
        <small>{route('books').subtitle}</small>
      </h1>
      <ListUnordered labelledBy="books">
        {BOOKS.map((item, index: number) => (
          <ListItem key={item.title}>
            <ListTag>#{String(index + 1).padStart(2, '0')}</ListTag>
            <ListTitle>
              {item.title} - {item.author}
            </ListTitle>
          </ListItem>
        ))}
      </ListUnordered>
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
