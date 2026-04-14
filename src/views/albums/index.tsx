import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { Image } from '@/ui/image';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
   data: {
    albums: Array<{
      coordinates: string;
      id: string;
      images: Array<{
        src: string;
        title: string;
      }>;
      location: string;
      title: string;
      when: string;
    }>;
    files: number;
   };
};

export default function View({ data }: Props) {
  const total = data.albums.length;

  return (
    <Content>
      <div className={styles.header}>
        <Header>
          <HeaderEyebrow>./</HeaderEyebrow>
          <HeaderText>
            Albums
          </HeaderText>
          <HeaderSubtitle>
            Photographic Journal
          </HeaderSubtitle>
        </Header>
        <span className="text-right">
          {total} albums<br />
          {data.files} images<br />
          {new Date().getFullYear() - 2015} years
        </span>
      </div>
      <nav aria-label="album navigation">
        <ul className={styles.albums}>
          {data.albums.map((album, index: number) => (
            <li className={styles.album} key={album.id}>
              <span className={styles.eyebrow}>
                [ A-{padIndex(total - index)} ]
              </span>
              <figure className={styles.figure}>
                <Link href={`/albums/${album.id}`}>
                  <Image
                    alt={`${album.images[0].title} album cover image`}
                    className={styles.image}
                    src={album.images[0].src}
                  />
                </Link>
                <figcaption className={styles.caption}>
                  {album.title}
                  <ul className={styles.stats}>
                    <li>{album.when}</li>
                    <li>{album.location}</li>
                    <li>{album.images.length} images</li>
                    <li>{album.coordinates}</li>
                  </ul>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </nav>
    </Content>
  );
}
