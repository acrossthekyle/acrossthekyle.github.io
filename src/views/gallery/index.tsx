import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import { Image } from '@/ui/image';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';
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
    <>
      <Header>
        <HeaderEyebrow>[ 04 ]</HeaderEyebrow>
        <HeaderPrefix>/</HeaderPrefix>Gallery
        <HeaderSubtitle>Photographic Journal</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>The world</Highlight> as seen <Highlight>through</Highlight> the lens of <Highlight>my</Highlight> various <Highlight>phone</Highlight>s.
      </Introduction>
      <aside className={styles.aside}>
        <ul aria-label="stats" className={styles.stats}>
          <li>
            <Highlight>{total}</Highlight> albums
          </li>
          <li>
            <Highlight>{data.files}</Highlight> images
          </li>
          <li>
            <Highlight>{new Date().getFullYear() - 2015}</Highlight> years
          </li>
        </ul>
      </aside>
      <nav aria-label="album supplementary navigation">
        <ul className={styles.albums}>
          {data.albums.map((album, index: number) => (
            <li className={styles.album} key={album.id}>
              <span className={styles.eyebrow}>
                [ A-{padIndex(total - index)} ]
              </span>
              <figure className={styles.figure}>
                <Link href={`/gallery/${album.id}`}>
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
                      <Highlight>{album.when}</Highlight>
                    </li>
                    <li>
                      <Highlight>{album.images.length}</Highlight> images
                    </li>
                    <li>{album.coordinates}</li>
                  </ul>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
