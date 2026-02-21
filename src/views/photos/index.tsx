import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import { route } from '@/routes';
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
        <strong>{route('photos').text}</strong>
        <small>{route('photos').subtitle}</small>
      </h1>
      {IMAGES.map(({ caption, src }, index: number) => (
        <Fragment key={src}>
          <ImageFigure>
            <Image
              alt=""
              height={1080}
              sizes="(max-width: 768px) 32vw, 40vw"
              src={src}
              width={1920}
            />
            <ImageCaption>{caption}</ImageCaption>
          </ImageFigure>
          {(index < IMAGES.length - 1) && <br />}
        </Fragment>
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
