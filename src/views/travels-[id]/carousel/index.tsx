'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import type { Collection, Image } from '@/types';

import Item from './item';
import { styles } from './stylesheet';

type Props = {
  collection: Collection;
  images: Image[];
};

export default function Carousel({ collection, images }: Props) {
  const [current, setCurrent] = useState(0);

  const handleOnNavigate = (direction: number) => {
    setCurrent(previous => {
      const index = direction > 0 ? previous === collection.count - 1 ? 0 : previous + 1 : previous - 1;

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
          onClick={() => handleOnNavigate(-1)}
          type="button"
        >
          <ChevronLeft className={styles.icon} />
        </button>
        <button
          className={styles.navigate(true)}
          onClick={() => handleOnNavigate(1)}
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
          <Item
            image={image}
            index={index}
            onInView={setCurrent}
            total={collection.count}
            key={image.id}
          />
        ))}
      </ul>
    </section>
  );
}
