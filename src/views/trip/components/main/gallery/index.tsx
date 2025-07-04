import Image from 'next/image';
import { RefCallback } from 'react';

import type { Trip } from '@/types';

import styles from './stylesheet';

type Props = {
  active: number;
  swipeable: RefCallback<HTMLElement>;
  trip: Trip;
};

export default function Gallery({ active, swipeable, trip }: Props) {
  return (
    <div className={styles.container}>
      <figure className={styles.figure} ref={swipeable}>
        {trip.stages.map(({ image }, index: number) => (
          <Image
            alt=""
            className={`${styles.image} ${active === index ? styles.featured : styles.hidden}`}
            height="1080"
            key={index}
            priority={index === 0}
            src={image}
            width="1920"
          />
        ))}
      </figure>
    </div>
  );
}
