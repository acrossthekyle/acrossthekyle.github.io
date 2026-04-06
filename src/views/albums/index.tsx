import Link from 'next/link';

import { Main } from '@/layout';
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
    <Main>
      <Header>
        <HeaderEyebrow>[ 04 ]</HeaderEyebrow>
        <HeaderText>Albums</HeaderText>
        <HeaderSubtitle>Photographic Journal</HeaderSubtitle>
      </Header>
      <p className={styles.description}>
        <span className={styles.highlight}>The world</span> as seen <span className={styles.highlight}>through</span> the lens of <span className={styles.highlight}>my</span> various <span className={styles.highlight}>phone</span>s.
      </p>
      <aside className={styles.aside}>
        <ul aria-label="stats" className={styles.stats}>
          <li>
            <span className={styles.highlight}>{total}</span> albums
          </li>
          <li>
            <span className={styles.highlight}>{data.files}</span> images
          </li>
          <li>
            <span className={styles.highlight}>{new Date().getFullYear() - 2015}</span> years
          </li>
        </ul>
      </aside>
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
                    <li>
                      <span className={styles.highlight}>{album.when}</span>
                    </li>
                    <li>
                      <span className={styles.highlight}>{album.images.length}</span> images
                    </li>
                    <li>{album.coordinates}</li>
                  </ul>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </nav>
    </Main>
  );
}
