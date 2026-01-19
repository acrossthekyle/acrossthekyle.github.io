import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';
import { Image } from '@/ui/image';

import { IMAGES } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="art">
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
              <BreadcrumbPage>
                Art
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Art & Photography</strong>
          <small>
            Snapshots of life
          </small>
        </h1>
      </header>
      {IMAGES.map(({ caption, src }) => (
        <figure className={styles.figure} key={src}>
          <Image
            alt=""
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
            width={1920}
          />
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      ))}
    </Layout>
  );
}
