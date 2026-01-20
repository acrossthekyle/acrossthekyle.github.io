import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import { Badge } from '@/ui/badge';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

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
              <Link href="/" id="skip-to">
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
          <small className={styles.label}>
            <Badge>{data.label} - {data.index}</Badge>
            {data.location.join(' - ')}
          </small>
          <small className={styles.date}>{data.date}</small>
        </h1>
      </header>
      <article aria-labelledby="title">
        {data.description.map((paragraph, index: number) => (
          <Fragment key={paragraph}>
            <p>{paragraph}</p>
            {index === 0 && (
              <ImageFigure className={styles.figure}>
                <Image
                  alt=""
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={data.image}
                  width={1920}
                />
                <ImageCaption>
                  {data.location.join(', ')}
                </ImageCaption>
              </ImageFigure>
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
