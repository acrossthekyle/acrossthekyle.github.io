'use client';

import { usePathname } from 'next/navigation';
import { WheelEvent, useEffect, useRef } from 'react';

import type { Data } from '@/types';

import Image from './image';
import styles from './stylesheet';

type Props = {
  images: Data[];
};

export default function Images({ images }: Props) {
  const scrollRef = useRef<HTMLUListElement>(null);

  const pathname = usePathname();

  const active = pathname?.split('/').pop();

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <section className={styles.container}>
      <ul
        className={styles.images}
        onWheel={handleWheel}
        ref={scrollRef}
      >
        {images.map((image, index) => (
          <li className={styles.item} key={image.src}>
            <Image current={active} image={image} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
