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
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout group="experiences">
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
                Experiences
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Wandering is Life</strong>
          <small>
            Experiencing new sights and sounds keeps me moving forward.
          </small>
        </h1>
        <p>
          I love leaving the crowded city behind and heading into nature with
          everything I need on my back, letting the trail remind me how little
          it actually takes to feel whole. I've thru-hiked a lot of miles, and
          one thing's always been true: <em>if I can see it, I can make it</em>.
        </p>
      </header>
      <ul aria-label="experiences navigation" className="flex flex-col gap-6">
        {data.map((item, index: number) => (
          <li key={index}>
            <Link
              className="block relative"
              href={`/experiences/${item.slug}`}
              id={index === 0 ? 'skip-to' : undefined}
            >
              <strong>{item.title.join(' ')}</strong>
              <small>
                <span className="capitalize">{item.type}</span> • {item.location}
              </small>
              <br />
              <small className="!text-xs text-current/50">
                {item.date}
              </small>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="stacked-link"
        href="/experiences/terminology"
      >
        <strong>Terminology</strong>
        <small>Thru-hikes, peak-bagging, etc.</small>
      </Link>
    </Layout>
  );
}
