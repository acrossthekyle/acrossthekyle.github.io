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
      <div className={styles.header}>
        <Header>
          <Link href="/albums">
            <HeaderPrefix>Albums</HeaderPrefix>
          </Link>
          <HeaderText>A-{padIndex(data.index)}</HeaderText>
          <HeaderSubtitle>
            {data.album.title}
          </HeaderSubtitle>
        </Header>
        <aside aria-label="album stats and info" className={styles.aside}>
          <span>{data.album.when}</span>
          <span>{data.album.images.length} images</span>
          <span>{data.album.coordinates}</span>
        </aside>
      </div>
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
                  <ul className={styles.stats}>
                    <li>{image.date}</li>
                    <li>{image.location}</li>
                    <li>{img}</li>
                    {image.exif && (
                      <>
                        {image.exif?.camera !== null && (
                          <li>
                            Cameria: {image.exif?.camera}
                          </li>
                        )}
                      </>
                    )}
                  </ul>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Content>
  );
}
