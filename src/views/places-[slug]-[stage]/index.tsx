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
          {data.label} {data.index}: {data.title}
        </strong>
        <small>{data.date} • {data.readingTime} min read</small>
      </h1>
      {data.hasGpx && (
        <Link className="cta" href={`/places/${data.slug}/${data.index}/gpx`}>
          GPX
        </Link>
      )}
      <ImageFigure>
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
