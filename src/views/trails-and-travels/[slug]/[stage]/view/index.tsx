import Link from 'next/link';

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
import { Image, ImageCaption, ImageFigure } from '@/ui/image';
import { LinkItalic } from '@/ui/link';

import Navigation from './navigation';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="trails-and-travels">
      <article>
        <header>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/trails-and-travels">
                  <BreadcrumbEllipsis />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href={`/trails-and-travels/${data.slug}`}>
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
            <strong>
              {data.title.join(' ')}
            </strong>
            <small className={styles.subtitle}>
              <span>{data.date}</span>
              <span className={styles.label}>{data.label} {data.index}/{data.total}</span>
            </small>
          </h1>
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
          <LinkItalic href={`/trails-and-travels/${data.slug}/${data.index}/gpx`}>
            View route and elevation
          </LinkItalic>
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
