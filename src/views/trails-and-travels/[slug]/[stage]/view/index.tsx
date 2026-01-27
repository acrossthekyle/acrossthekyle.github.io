import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbBack,
  BreadcrumbList,
  BreadcrumbItem,
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
                  <BreadcrumbBack>
                    <BreadcrumbTruncate text="Trails and Travels" />
                  </BreadcrumbBack>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href={`/trails-and-travels/${data.slug}`}>
                  <BreadcrumbTruncate text={data.parent.join(' ')} />
                </Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1>
            <strong>
              <small>
                {data.snippet}
              </small>
            </strong>
            <small>
              <em>
                {data.label} {data.index}:{' '}
                {data.termini.isSame ? (
                  <>{data.termini.end.words.join(' ')}</>
                ) : (
                  <>
                    {data.termini.start.words.join(' ')} → {data.termini.end.words.join(' ')}
                  </>
                )}
              </em>
            </small>
          </h1>
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
        <p>
          <strong>
            <small>
              {data.location.join(', ')}
            </small>
          </strong>
          <em>
            <small>
              {data.date}
            </small>
          </em>
        </p>
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
            slug={data.slug}
          />
        )}
      </article>
    </Layout>
  );
}
