import { SquareChevronLeft, SquareChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderPrefix,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { Image } from '@/ui/image';
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
      date: string;
      exif?: {
        aperture: string | null;
        camera: string | null;
        exposure: string | null;
        fnumber: string | null;
        focal: number | null;
        iso: number | null;
      };
      location: string;
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
    <Content>
      <Header>
        <Link href={`/albums/${data.album.id}`}>
          <HeaderPrefix>
            {data.album.title}
          </HeaderPrefix>
        </Link>
        <HeaderText>IMG-{padIndex(data.index + 1)}</HeaderText>
        <HeaderSubtitle>
          {data.image.title}
        </HeaderSubtitle>
      </Header>
      <ul className={styles.items}>
        <li className={styles.item}>
          {data.image.date}
        </li>
        <li className={styles.item}>
          {data.image.location}
        </li>
      </ul>
      {data.image.exif && (
        <ul className={styles.items}>
          {data.image.exif?.camera !== null && (
            <li className={styles.item}>
              Camera: {data.image.exif?.camera}
            </li>
          )}
          {data.image.exif?.iso !== null && (
            <li className={styles.item}>
              ISO: {data.image.exif?.iso}
            </li>
          )}
          {data.image.exif?.focal !== null && (
            <li className={styles.item}>
              Focal length: {data.image.exif?.focal} mm
            </li>
          )}
          {data.image.exif?.exposure !== null && (
            <li className={styles.item}>
              Exposure: {data.image.exif?.exposure} ev
            </li>
          )}
          {data.image.exif?.fnumber !== null && (
            <li className={styles.item}>
              F-number: <span className={styles.emphasis}>f</span>/{data.image.exif?.fnumber}
            </li>
          )}
          {data.image.exif?.aperture !== null && (
            <li className={styles.item}>
              Aperture: {data.image.exif?.aperture} <span className={styles.emphasis}>s</span>
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
      <nav aria-label="album photos supplementary navigation">
        <ul className={styles.navigation}>
          <li>
            {data.previous && (
              <Link
                className={styles.link}
                href={`/albums/${data.album.id}/${data.previous}`}
              >
                <SquareChevronLeft className={styles.kbd} /> Previous
              </Link>
            )}
          </li>
          <li>
            {data.next && (
              <Link
                className={`${styles.link} ${styles.end}`}
                href={`/albums/${data.album.id}/${data.next}`}
              >
                Next <SquareChevronRight className={styles.kbd} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Keyboard
        albumId={data.album.id}
        next={data.next}
        previous={data.previous}
      />
    </Content>
  );
}
