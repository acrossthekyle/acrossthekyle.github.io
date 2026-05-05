'use client';

import { InView } from 'react-intersection-observer';

import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';
import { getDelay } from './utils';

type Props = {
  colorMode: string;
  id: string | null;
  images: Data[];
  onClick: (image: Data) => void;
};

export default function Collection({ colorMode, id, images, onClick }: Props) {
  return (
    <ul className={styles.grid}>
      {images
        .filter(({ collection }) => collection.id === id)
        .reverse()
        .map((image, index: number) => {
          const delay = getDelay(index);

          return (
            <InView key={image.src} threshold={0} triggerOnce>
              {({ inView, ref }) => (
                <li
                  className={styles.cell(inView)}
                  ref={ref}
                  style={{
                    transitionDelay: `${delay}s`,
                  }}
                >
                  <figure>
                    <button
                      aria-label="view image details"
                      className={styles.cta}
                      onClick={() => onClick(image)}
                      type="button"
                    >
                      <Ui.Image
                        className={styles.image(colorMode)}
                        src={image.src}
                        thumb={image.thumb}
                      />
                    </button>
                    <figcaption className={styles.caption}>
                      {image.title} &mdash; {image.location.region}, {image.location.country}
                      <span className={styles.faded}>
                        {image.when}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              )}
            </InView>
          );
      })}
    </ul>
  );
}
