'use client';

import { debounce } from 'lodash';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { InView } from 'react-intersection-observer';

import type { Image } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  images: Image[];
};

export default function Carousel({ images }: Props) {
  const searchParams = useSearchParams();

  const active = searchParams.get('ref')?.split('/').pop();

  useEffect(() => {
    const scrollToActive = () => {
      if (active) {
        const image = document.getElementById(active);

        if (image) {
          image.scrollIntoView({
            behavior: 'instant',
            block: 'nearest',
            inline: 'center',
          });
        }
      }
    };

    setTimeout(() => {
      scrollToActive();
    }, 500);

    const debounced = debounce(scrollToActive, 300);

    window.addEventListener('resize', debounced);

    return () => {
      debounced.cancel?.();

      window.removeEventListener('resize', debounced);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={styles.container} style={{ animationDelay: '.6s' }}>
      {images.map((image) => (
        <InView
          key={image.src}
          threshold={.6125}
        >
          {({ inView, ref }) => (
            <li className={styles.item} id={image.id} key={image.src} ref={ref}>
              <figure className={styles.figure}>
                <Ui.Image
                  className={styles.image(inView)}
                  key={image.src}
                  size="large"
                  src={image.src}
                  thumb={image.thumb}
                />
                <figcaption className={styles.caption(inView)}>
                  <p className={styles.stack}>
                    <span>
                      {image.title || image.location.region}
                    </span>
                    <span>
                      {image.location.country}, {image.location.continent}
                    </span>
                  </p>
                  <p className={styles.stack}>
                    <Ui.Units.Length isSmall value={image.elevation} />
                  </p>
                </figcaption>
              </figure>
            </li>
          )}
        </InView>
      ))}
    </ul>
  );
}
