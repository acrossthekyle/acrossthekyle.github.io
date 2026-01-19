import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { Image } from '@/ui/image';

import Navigation from './navigation';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
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
            <BreadcrumbEllipsis />
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/experiences/${data.slug}`}>
                <BreadcrumbTruncate text={data.parent.join(' ')} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <BreadcrumbTruncate text={data.title.join(' ')} />
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 id="title">
          <strong>{data.title.join(' ')}</strong>
          <small>
            {data.location.join(', ')} &mdash; {data.date}
          </small>
        </h1>
      </header>
      <article aria-labelledby="title">
        {data.description.map((paragraph, index: number) => (
          <Fragment key={paragraph}>
            <p>
              {paragraph}
            </p>
            {index === 0 && (
              <figure className={styles.figure}>
                <Image
                  alt=""
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={data.image}
                  width={1920}
                />
                <figcaption className={styles.caption}>
                  {data.location.join(', ')}
                </figcaption>
              </figure>
            )}
          </Fragment>
        ))}
        {data.hasGpx && (
          <Link
            className="stacked-link"
            href={`/experiences/${data.slug}/${data.index}/gpx`}
          >
            <strong>GPX Data</strong>
            <small>Route, elevation, stats</small>
          </Link>
        )}
        {data.hasNavigation && (
          <Navigation
            next={data.next}
            previous={data.previous}
            slug={data.slug}
          />
        )}
      </article>
    </Layout>
  );
}
