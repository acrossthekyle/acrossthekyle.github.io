import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Heading, Small, Strong } from '@/ui/typography';

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
      <Heading id="books">
        <Strong>{route('books').text}</Strong>
        <Small>{route('books').subtitle}</Small>
      </Heading>
      <ul aria-labelledby="books">
        {data.map((item, index: number) => (
          <li key={item.title}>
            {item.title}
            <Small>{item.author}</Small>
            {(index < data.length - 1 ) && <hr />}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
