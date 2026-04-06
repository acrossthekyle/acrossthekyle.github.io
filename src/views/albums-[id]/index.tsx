import Link from 'next/link';

import { Main } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
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
    <Main>
      <Header>
        <HeaderEyebrow>[ A-{padIndex(data.index)} ]</HeaderEyebrow>
        <HeaderPrefix>
          <Link href="/albums">Albums</Link>
        </HeaderPrefix>
        <HeaderText>{data.album.title}</HeaderText>
      </Header>
      <aside className={styles.aside}>
        <ul aria-label="stats" className={styles.stats}>
          <li>
            <span className={styles.highlight}>{data.album.when}</span>
          </li>
          <li>
            <span className={styles.highlight}>{data.album.images.length}</span> images
          </li>
          <li>
            {data.album.coordinates}
          </li>
        </ul>
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
                  <span className={styles.stats}>
                    {img}
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Main>
  );
}
