import Link from 'next/link';
import Markdown from 'react-markdown';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';

import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="writing">
      <article>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/writing">
                <BreadcrumbTruncate text="Writing" />
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2>
          <strong>{data.title}</strong>
          <small>{data.date}</small>
        </h2>
        <br />
        <Markdown>{data.content}</Markdown>
      </article>
    </Layout>
  );
}
