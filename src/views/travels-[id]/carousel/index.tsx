'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';

import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';
import { pad } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  collection: Collection;
  images: Image[];
};

export default function Carousel({ collection, images }: Props) {
  const [current, setCurrent] = useState(0);

  const handleOnPrevious = () => {
    setCurrent(previous => {
      const index = previous - 1;

      const element = document.getElementById(`slide-${index}`);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      return index;
    });
  };

  const handleOnNext = () => {
    setCurrent(previous => {
      const index = previous === collection.count - 1 ? 0 : previous + 1;

      const element = document.getElementById(`slide-${index}`);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      return index;
    });
  };

  return (
    <section aria-label="images carousel" className={styles.carousel}>
      <nav className={styles.navigation}>
        <button
          className={styles.navigate(current > 0)}
          disabled={current === 0}
          onClick={handleOnPrevious}
          type="button"
        >
          <ChevronLeft className={styles.icon} />
        </button>
        <button
          className={styles.navigate(true)}
          onClick={handleOnNext}
          type="button"
        >
          <ChevronRight className={styles.icon} />
        </button>
      </nav>
      <ul
        aria-label="images"
        className={styles.items}
      >
        {images.map((image, index) => (
          <li
            className={styles.item}
            id={`slide-${index}`}
            key={image.id}
          >
            <InView threshold={0.5}>
              {({ inView, ref }) => (
                <figure className={styles.figure} ref={ref}>
                  <Ui.Image
                    className={styles.thumbnail(inView)}
                    src={image.src}
                    thumb={image.thumb}
                  />
                  <figcaption className={styles.caption}>
                    <span className={styles.eyebrow}>
                      {pad(index + 1)} of {pad(collection.count)}
                    </span>
                    <span className={styles.label}>
                      {image.title || image.location.region}
                    </span>
                    <span className={styles.lid}>
                      <Ui.Units.Length isSmall value={image.elevation} />
                    </span>
                  </figcaption>
                </figure>
              )}
            </InView>
          </li>
        ))}
      </ul>
    </section>
  );
}
