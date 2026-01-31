import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';
import { LinkButton } from '@/ui/link';
import { TerminiRange } from '@/ui/termini';

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
                  <BreadcrumbTruncate text="Trails and Travels" />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem highlight>
                <Link href={`/trails-and-travels/${data.slug}`}>
                  <BreadcrumbTruncate text={data.parent.join(' ')} />
                </Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1>
            <strong>{data.snippet}</strong>
            <small><em>{data.date}</em></small>
          </h1>
          {data.hasGpx && (
            <LinkButton
              className={styles.gpx}
              href={`/trails-and-travels/${data.slug}/${data.index}/gpx`}
            >
              View GPX
            </LinkButton>
          )}
        </header>
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
        <small>
          <em>
            <strong>
              {data.label}{' '}
              {data.index}:{' '}
              <TerminiRange termini={data.termini} />
            </strong>
          </em>
        </small>
        <br />
        {data.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {data.hasNavigation && (
          <Navigation
            next={data.next}
            slug={data.slug}
          />
        )}
      </article>
    </Layout>
  );
}
