import Link from 'next/link';
import Markdown from 'react-markdown';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

import Gpx from './gpx';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1 className={styles.header}>
        <strong>
          {data.title}
        </strong>
        <small>
          {data.date} &mdash; {data.label} #{data.index} • {data.readingTime} min read
          {data.hasGpx && <> / <Link href="#gpx">GPX</Link></>}
        </small>
      </h1>
      <ImageFigure className={styles.figure}>
        <Image
          alt=""
          height={1080}
          sizes="40vw"
          src={data.image}
          width={1920}
        />
        <ImageCaption>
          {data.location}
        </ImageCaption>
      </ImageFigure>
      <Markdown>{data.content}</Markdown>
      {data.hasNavigation && (
        <section
          aria-label="next previous navigation"
          className={styles.footer}
        >
          {data.previous && (
            <Link href={`/places/${data.slug}/${data.previous}`}>
              ← Previous
            </Link>
          )}
          {data.next && (
            <Link href={`/places/${data.slug}/${data.next}`}>
              Next →
            </Link>
          )}
        </section>
      )}
      {data.hasGpx && (
        <Gpx gpx={data.gpx} stats={data.stats} />
      )}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/places">
              places/
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/places/${data.slug}`}>
              <BreadcrumbTruncate text={data.parent} />
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
