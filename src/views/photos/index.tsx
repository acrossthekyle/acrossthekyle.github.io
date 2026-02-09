import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

import { IMAGES } from './constants';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>Photos</strong>
        <small>Life snapshots</small>
      </h1>
      <p>
        I use my phone to capture moments from everyday life, the vibrant city around me, and sights from the trails.
      </p>
      <section aria-label="gallery">
        {IMAGES.map(({ caption, src }) => (
          <ImageFigure key={src}>
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
      </section>
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
