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
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem highlight>
              <Link href="/writing">
                <BreadcrumbTruncate text="Writing" />
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>{data.title}</strong>
          <small>
            <em>
              {data.date}
            </em>
          </small>
        </h1>
      </header>
      <Markdown>{data.content}</Markdown>
    </Layout>
  );
}
