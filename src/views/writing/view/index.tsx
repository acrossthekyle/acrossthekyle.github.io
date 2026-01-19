import Link from 'next/link';
import Markdown from 'react-markdown';

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
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout group="writing">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" id="skip-to">
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
          <strong>All about words</strong>
          <small>A sort of mini-blog.</small>
        </h1>
      </header>
      {data.map((item) => (
        <article key={item.title}>
          <h2>
            <strong>{item.title}</strong>
            <small>{item.date}</small>
          </h2>
          <Markdown>{item.content}</Markdown>
        </article>
      ))}
    </Layout>
  );
}
