import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

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
          <strong>Snapshots of things</strong>
          <small>
            Photography and art
          </small>
        </h1>
      </header>
      {IMAGES.map(({ caption, src }) => (
        <ImageFigure className={styles.figure} key={src}>
          <Image
            alt=""
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
            width={1920}
          />
          <ImageCaption>{caption}</ImageCaption>
        </ImageFigure>
      ))}
    </Layout>
  );
}
