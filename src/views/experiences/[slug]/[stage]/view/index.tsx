import Link from 'next/link';

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
import { LinkStacked } from '@/ui/link';

import Navigation from './navigation';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="experiences">
      <article>
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
                <Link href="/experiences">
                  <BreadcrumbEllipsis />
                </Link>
              </BreadcrumbItem>
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
          <h1>
            <Badge>{data.label} {data.index}</Badge>
            <strong>{data.title.join(' ')}</strong>
            <small className={styles.subtitle}>
              {data.date}
            </small>
          </h1>
          {data.hasNavigation && (
            <Navigation
              next={data.next}
              previous={data.previous}
              slug={data.slug}
            />
          )}
        </header>
        <ImageFigure className={styles.figure}>
          <Image
            alt=""
            className={styles.image}
            height={1080}
            sizes="(max-width: 768px) 100vw, 33vw"
            src={data.image}
            width={1920}
          />
          <ImageCaption>
            {data.location.join(', ')}
          </ImageCaption>
        </ImageFigure>
        {data.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {data.hasGpx && (
          <LinkStacked
            href={`/experiences/${data.slug}/${data.index}/gpx`}
          >
            <strong>GPX Data</strong>
            <small>View the route and elevation profile</small>
            <small className={styles.subtitle}>Includes other stats</small>
          </LinkStacked>
        )}
      </article>
    </Layout>
  );
}
