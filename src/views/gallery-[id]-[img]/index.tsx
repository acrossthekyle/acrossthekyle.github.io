import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
} from '@/ui/header';
import { Image } from '@/ui/image';
import { Highlight } from '@/ui/typography';
import { padIndex } from '@/utils';

import Keyboard from './keyboard';
import styles from './stylesheet';

type Props = {
   data: {
    album: {
      id: string;
      title: string;
    };
    image: {
      exif?: {
        aperture: string | null;
        camera: string | null;
        exposure: string | null;
        fnumber: string | null;
        focal: number | null;
        iso: number | null;
      };
      src: string;
      title: string;
    };
    index: number;
    next?: string | null;
    previous?: string | null;
   };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ {data.image.src.split('-').pop()} ]</HeaderEyebrow>
        IMG {padIndex(data.index + 1)}
        <HeaderSubtitle>
          {data.album.title} &ndash; <Highlight>{data.image.title}</Highlight>
        </HeaderSubtitle>
      </Header>
      {data.image.exif && (
        <ul aria-label="image exif data" className={styles.items}>
          {data.image.exif?.camera !== null && (
            <li className={styles.item}>
              <span className={styles.eyebrow}>Camera</span>
              {data.image.exif?.camera}
            </li>
          )}
          {data.image.exif?.iso !== null && (
            <li className={styles.item}>
              <span className={styles.eyebrow}>ISO</span>
              {data.image.exif?.iso}
            </li>
          )}
          {data.image.exif?.focal !== null && (
            <li className={styles.item}>
              <span className={styles.eyebrow}>Focal length</span>
              {data.image.exif?.focal} mm
            </li>
          )}
          {data.image.exif?.exposure !== null && (
            <li className={styles.item}>
              <span className={styles.eyebrow}>Exposure</span>
              {data.image.exif?.exposure} ev
            </li>
          )}
          {data.image.exif?.fnumber !== null && (
            <li className={styles.item}>
              <span className={styles.eyebrow}>F-number</span>
              <span className={styles.emphasis}>f</span>/{data.image.exif?.fnumber}
            </li>
          )}
          {data.image.exif?.aperture !== null && (
            <li className={styles.item}>
              <span className={styles.eyebrow}>Aperture</span>
              {data.image.exif?.aperture} <span className={styles.emphasis}>s</span>
            </li>
          )}
        </ul>
      )}
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          size="large"
          src={data.image.src}
        />
      </figure>
      <nav
        aria-label="album photos supplementary navigation"
        className={styles.navigation}
      >
        <Link className={styles.album} href={`/gallery/${data.album.id}`}>
          Back to album
        </Link>
        {data.previous && (
          <Link
            href={`/gallery/${data.album.id}/${data.previous}`}
          >
            Previous
          </Link>
        )}
        {data.next && (
          <Link href={`/gallery/${data.album.id}/${data.next}`}>Next</Link>
        )}
      </nav>
      <Keyboard
        albumId={data.album.id}
        next={data.next}
        previous={data.previous}
      />
    </>
  );
}
