import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
} from '@/ui/header';
import { Image } from '@/ui/image';
import { Highlight } from '@/ui/typography';
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
    <>
      <Header>
        <HeaderEyebrow>[ A-{padIndex(data.index)} ]</HeaderEyebrow>
        <HeaderPrefix>Gallery/</HeaderPrefix>{data.album.title}
      </Header>
      <aside className={styles.aside}>
        <ul aria-label="stats" className={styles.stats}>
          <li>
            <Highlight>{data.album.when}</Highlight>
          </li>
          <li>
            <Highlight>{data.album.images.length}</Highlight> images
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
                <Link href={`/gallery/${data.album.id}/${img}`}>
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
    </>
  );
}
