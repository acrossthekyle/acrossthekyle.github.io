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

import styles from './stylesheet';

type Props = {
   data: {
    album: {
      coordinates: string;
      id: string;
      images: Array<{
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
      }>;
      location: string;
      title: string;
      when: string;
    };
    index: number;
   };
};

export default function View({ data }: Props) {
  return (
    <Content>
      <Header>
        <Link href="/albums">
          <HeaderPrefix>Albums</HeaderPrefix>
        </Link>
        <HeaderText>{data.album.title}</HeaderText>
        <HeaderSubtitle>
          [ A-{padIndex(data.index)} ]
        </HeaderSubtitle>
      </Header>
      <aside aria-label="album stats and info" className={styles.aside}>
        <span>{data.album.when}</span>
        <span>{data.album.images.length} images</span>
        <span>{data.album.coordinates}</span>
      </aside>
      <ul className={styles.items}>
        {data.album.images.map((image, index: number) => {
          const img = image.src.split('-').pop();

          return (
            <li className={styles.item} key={image.src}>
              <span className={styles.eyebrow}>
                [ IMG-{padIndex(index + 1)} ]
              </span>
              <figure className={styles.figure}>
                <Link href={`/albums/${data.album.id}/${img}`}>
                  <Image
                    className={styles.image}
                    src={image.src}
                  />
                </Link>
                <figcaption className={styles.caption}>
                  {image.title}
                  {image.exif && (
                    <ul aria-label="image exif data" className={styles.stats}>
                      <li>
                        {img}
                      </li>
                      {image.exif?.camera !== null && (
                        <li>
                          Cameria: {image.exif?.camera}
                        </li>
                      )}
                      {image.exif?.iso !== null && (
                        <li>
                          ISO: {image.exif?.iso}
                        </li>
                      )}
                      {image.exif?.focal !== null && (
                        <li>
                          Focal: {image.exif?.focal} mm
                        </li>
                      )}
                      {image.exif?.exposure !== null && (
                        <li>
                          Exposure: {image.exif?.exposure} ev
                        </li>
                      )}
                      {image.exif?.fnumber !== null && (
                        <li>
                          F-Number: f/{image.exif?.fnumber}
                        </li>
                      )}
                      {image.exif?.aperture !== null && (
                        <li>
                          Aperture: {image.exif?.aperture} s
                        </li>
                      )}
                    </ul>
                  )}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Content>
  );
}
