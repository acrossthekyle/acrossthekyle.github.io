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
import { LinkInternal } from '@/ui/link';
import { TerminiRange } from '@/ui/termini';

import Navigation from './navigation';
import styles from './stylesheet';
import { type Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="places">
      <article>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/places">
                ../Places
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/places/${data.slug}`}>
                <BreadcrumbTruncate text={data.parent.join(' ')} />
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2>
          <strong>{data.snippet}</strong>
          <small>{data.date}</small>
        </h2>
        {data.hasGpx && (
          <LinkInternal
            href={`/places/${data.slug}/${data.index}/gpx`}
          >
            View GPX
          </LinkInternal>
        )}
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
        <section>
          <h3>
            <strong>
              {data.label} {data.index}:{' '}
              <TerminiRange termini={data.termini} />
            </strong>
          </h3>
          {data.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
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
