import Link from 'next/link';

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
  data: Data;
};

// eslint-disable-next-line unused-imports/no-unused-vars
export default function View({ data }: Props) {
  return (
    <Layout group="writing">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
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
          <strong>All about writing</strong>
          <small>My thoughts and opinions.</small>
        </h1>
        <p>
          From time to time I'll share my thoughts about things. Could be
          about what I'm currently watching, or why I personally feel that car
          horns are a nuissance.
        </p>
      </header>
      <article>
        <h2>
          <strong>The nth site redesign</strong>
          <small>Jan 17th, 2026</small>
        </h2>
        <p>
          I've redesigned this website more times than I can count, with each
          iteration feeling like it just wasn't quite right. So, I decided it was
          time to try something different.
        </p>
        <p>
          Rather than work myself up into a design frenzy by trying to fill the
          entire screen with an evenly spaced layout while at the same time wondering
          if I'm using the correct amount of negative space, or animating the
          necessary elements (and of course agonizing over multiple screen sizes),
          I decided to keep this design simple, and light.
        </p>
        <p>
          Less is more.
        </p>
      </article>
    </Layout>
  );
}
