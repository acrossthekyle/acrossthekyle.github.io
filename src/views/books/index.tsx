import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
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
      <ul aria-labelledby="books">
        {data.map((item, index: number) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <small>{item.author}</small>
            {(index < data.length - 1 ) && <hr />}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
