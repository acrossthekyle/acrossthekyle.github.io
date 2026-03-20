import Link from 'next/link';
import { Fragment } from 'react';
import Markdown from 'react-markdown';

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
      <Heading id="words">
        <Strong>{route('words').text}</Strong>
        <Small>{route('words').subtitle}</Small>
      </Heading>
      {data.map((item, index: number) => (
        <Fragment key={item.slug}>
          <article>
            <Heading level={2} id={item.slug}>
              <Strong uppercase>{item.title}</Strong>
              <Small>{item.date} • {item.readingTime} min read</Small>
            </Heading>
            <Markdown>{item.content}</Markdown>
          </article>
          {(index < (data.length - 1)) && <hr />}
        </Fragment>
      ))}
    </Layout>
  );
}
