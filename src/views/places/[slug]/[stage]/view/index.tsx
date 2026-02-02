import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';
import { TerminiRange } from '@/ui/termini';

import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>
          {data.label} {data.index}: <TerminiRange termini={data.termini} />
        </strong>
        <small>{data.date}</small>
      </h1>
      <ImageFigure className={styles.figure}>
        <Image
          alt=""
          height={1080}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={data.image}
          width={1920}
        />
        <ImageCaption invisible>
          {data.location.join(', ')}
        </ImageCaption>
      </ImageFigure>
      <section aria-label="report">
        {data.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      {(data.hasNavigation || data.hasGpx) && (
        <section className={styles.extras}>
          {data.hasGpx && (
            <Link href={`/places/${data.slug}/${data.index}/gpx`}>
              Route ↗
            </Link>
          )}
          {data.hasNavigation && (
            <div className={styles.navigation}>
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
            </div>
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
