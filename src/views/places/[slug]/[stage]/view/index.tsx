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
import { LinkTag } from '@/ui/link';
import { TerminiRange } from '@/ui/termini';

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
          {data.label} {data.index}: <TerminiRange termini={data.termini} />
        </strong>
        <small>{data.date} • {data.readingTime} min read</small>
      </h1>
      {data.hasGpx && (
        <LinkTag href={`/places/${data.slug}/${data.index}/gpx`}>
          GPX
        </LinkTag>
      )}
      <ImageFigure>
        <Image
          alt=""
          height={1080}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={data.image}
          width={1920}
        />
        <ImageCaption>
          {data.location.join(', ')}
        </ImageCaption>
      </ImageFigure>
      <section aria-label="description">
        <Markdown>{data.content}</Markdown>
      </section>
      {data.hasNavigation && (
        <section className={styles.footer}>
          {data.previous !== undefined && (
            <Link href={`/places/${data.slug}/${data.previous.index}`}>
              ← Previous
            </Link>
          )}
          {data.next !== undefined && (
            <Link href={`/places/${data.slug}/${data.next.index}`}>
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
              <BreadcrumbTruncate text={data.parent.join(' ')} />
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
