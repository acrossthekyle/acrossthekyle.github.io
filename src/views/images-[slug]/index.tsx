import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageFigure } from '@/ui/image';

import Caption from './caption';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
          {data.page === 'photos' ? (
            <BreadcrumbItem>
              <Link href="/photos">
                photos
              </Link>
            </BreadcrumbItem>
          ) : (
            <>
              <BreadcrumbItem>
                <Link href="places">
                  places/
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href={`/places/${data.slug}`}>
                  {data.place}/
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href={`/places/${data.slug}#images`}>
                  images
                </Link>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <h1>
        <strong>Image {data.index}/{data.total}</strong>
        <small>
          {data.date} • {data.location}{!!data.title && ` • ${data.title}`}
        </small>
      </h1>
      <ImageFigure className={styles.figure}>
        <Image
          alt=""
          height={432}
          sizes="(max-width: 768px) 32vw, 30vw"
          src={data.src}
          width={768}
        />
        <Caption src={data.src} />
      </ImageFigure>
      {data.hasNavigation && (
        <nav aria-label="image supplementary navigation" className={styles.nav}>
          {!!data.previous && (
            <Link href={`/images/${data.previous}`}>
              Previous
            </Link>
          )}
          {!!data.next && (
            <Link href={`/images/${data.next}`}>
              Next
            </Link>
          )}
        </nav>
      )}
    </Layout>
  );
}

