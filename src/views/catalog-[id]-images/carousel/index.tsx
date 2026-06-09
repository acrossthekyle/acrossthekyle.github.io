'use client';

import { debounce } from 'lodash';
import { useSearchParams } from 'next/navigation';
import { WheelEvent, useEffect, useMemo, useRef } from 'react';
import { InView } from 'react-intersection-observer';

import { useOrientation } from '@/hooks/useOrientation';
import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  collection: Collection;
  images: Image[];
  onNavigate: (index: number) => void;
};

export default function Carousel({
  collection,
  images,
  onNavigate,
}: Props) {
  const scrollRef = useRef<HTMLUListElement>(null);

  const searchParams = useSearchParams();

  const orientation = useOrientation();

  const active = searchParams.get('ref')?.split('/').pop();

  useEffect(() => {
    const scrollToActive = () => {
      if (active) {
        const image = document.getElementById(active);

        if (image) {
          image.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
      }
    };

    const timer = setTimeout(scrollToActive, 500);

    window.addEventListener('resize', scrollToActive);

    return () => {
      clearTimeout(timer);

      window.removeEventListener('resize', scrollToActive);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation]);

  const handleWheel = (event: WheelEvent<HTMLUListElement>) => {
    if (event.deltaY === 0) {
      return;
    }

    event.preventDefault();

    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + event.deltaY,
      });
    }
  };

  const debouncedNavigate = useMemo(
    () =>
      debounce((index: number) => {
        onNavigate(index);
      }, 1000),
    [onNavigate]
  );

  useEffect(() => {
    return () => {
      debouncedNavigate.cancel();
    };
  }, [debouncedNavigate]);

  const handleOnInView = (isInView: boolean, index: number) => {
    if (isInView) {
      debouncedNavigate(index);
    }
  };

  return (
    <ul
      className={styles.container}
      key={collection.id}
      onWheel={handleWheel}
      ref={scrollRef}
    >
      {images.map((image, index: number) => (
        <InView
          onChange={(isInView: boolean) => handleOnInView(isInView, index)}
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
                    <span>{image.location.region}</span>
                    <span>{collection.title.join(' ')}</span>
                    <span>{image.location.country}, {image.location.continent}</span>
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
