import Link from 'next/link';
import Markdown from 'react-markdown';

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
      <h1 id="words">
        <strong>{route('words').text}</strong>
        <small>{route('words').subtitle}</small>
      </h1>
      {data.map((item) => (
        <article key={item.slug}>
          <h2 id={item.slug}>
            <strong>{item.title.toUpperCase()}</strong>
            <small>{item.date} • {item.readingTime} min read</small>
          </h2>
          <Markdown>{item.content}</Markdown>
        </article>
      ))}
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
