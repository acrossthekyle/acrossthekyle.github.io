'use client';

import { debounce } from 'lodash';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { InView } from 'react-intersection-observer';

import { useOrientation } from '@/hooks/useOrientation';
import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  collection: Collection;
  images: Image[];
};

export default function Carousel({
  collection,
  images,
}: Props) {
  const searchParams = useSearchParams();

  const orientation = useOrientation();

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

    scrollToActive();

    const debouncedScroll = debounce(scrollToActive, 300);

    window.addEventListener('resize', debouncedScroll);

    return () => {
      debouncedScroll.cancel?.();

      window.removeEventListener('resize', debouncedScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation]);

  return (
    <ul
      className={styles.container}
      key={collection.id}
    >
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
                  <h2 className={styles.heading}>
                    {image.title || image.location.region}
                  </h2>
                  <p className={styles.stack}>
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
