import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

import { IMAGES } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>{route('photos').text}</strong>
        <small>{route('photos').subtitle}</small>
      </h1>
      {IMAGES.map(({ caption, src }) => (
        <ImageFigure className={styles.figure} key={src}>
          <Image
            alt=""
            height={1080}
            sizes="(max-width: 768px) 32vw, 40vw"
            src={src}
            width={1920}
          />
          <ImageCaption>{caption}</ImageCaption>
        </ImageFigure>
      ))}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
