'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Image } from '@/types';
import Ui from '@/ui';
import { padIndex } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  images: Image[];
  total: number;
};

export default function Images({ images, total }: Props) {
  return (
    <ul aria-label="images" className={styles.list}>
      {images.map((image, index) => (
        <InView key={image.src} threshold={.6125}>
          {({ inView, ref }) => (
            <li className={styles.item(index)} ref={ref}>
              <figure className={styles.figure}>
                <Ui.Image
                  className={styles.image(inView)}
                  size="large"
                  src={image.src}
                  thumb={image.thumb}
                />
                <figcaption className={styles.caption}>
                  <Link
                    className={styles.cta}
                    href={`/wanderings/${image.collectionId}/images?ref=${image.id}`}
                  >
                    <span className={styles.meta}>
                      <span>{image.title}</span>
                      <span>{image.location.region}</span>
                    </span>
                    <span className={styles.index}>
                      <span className={styles.strong}>
                        {padIndex(index + 1)}
                      </span>
                      <span>/</span>
                      <span>{padIndex(total)}</span>
                    </span>
                  </Link>
                </figcaption>
              </figure>
            </li>
          )}
        </InView>
      ))}
    </ul>
  );
}
