'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Image } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  images: Array<Image[]>;
  total: number;
};

export default function Images({ images, total }: Props) {
  const chunkSize = images[0].length || 0;

  return (
    <section aria-label="images">
      {images.map((chunk, index) => (
        <div
          className={styles.group}
          key={index}
        >
          {chunk.map((image, key) => {
            const currentIndex = (index * chunkSize) + key + 1;

            return (
              <InView key={image.src} threshold={0.1} triggerOnce>
                {({ inView, ref }) => (
                  <figure
                    className={styles.figure(index, key, inView)}
                    ref={ref}
                  >
                    <Link
                      className={styles.cta}
                      href={`/wanderings/${image.collectionId}/images?ref=${image.id}`}
                    >
                      <Ui.Image
                        className={styles.image}
                        src={image.src}
                        thumb={image.thumb}
                      />
                    </Link>
                    <figcaption className={styles.caption}>
                      <span className={styles.meta}>
                        <span>{image.location.region}</span>
                      </span>
                      <span className={styles.index}>
                        <span className={styles.strong}>
                          {padIndex(currentIndex)}
                        </span>
                        <span>/</span>
                        <span className={styles.highlight}>{padIndex(total)}</span>
                      </span>
                    </figcaption>
                  </figure>
                )}
              </InView>
            );
          })}
        </div>
      ))}
    </section>
  );
}
