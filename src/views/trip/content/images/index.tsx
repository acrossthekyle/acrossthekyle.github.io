'use client';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import { SwipeEventData, useSwipeable } from 'react-swipeable';

import { Stage } from '../types';
import Dots from './dots';
import Resize from './resize';
import styles from './stylesheet';

type Props = {
  currentIndex: number;
  label: string;
  location: string;
  onChange: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  stages: Stage[];
  title: string;
};

export default function Images({
  currentIndex,
  label,
  location,
  onChange,
  onNext,
  onPrevious,
  stages,
  title,
}: Props) {
  const swipeable = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      if (eventData.dir.toLowerCase() === 'left') {
        onNext();
      } else if (eventData.dir.toLowerCase() === 'right') {
        onPrevious();
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.location}>{location}</p>
        <p className={styles.trip}>
          {title}
        </p>
        <p className={styles.title}>
          {stages[currentIndex].title.replace(/ to /g, '\u00A0\u2192\u00A0')}
        </p>
        <p className={styles.step}>
          {label} {currentIndex + 1} / {stages.length}
        </p>
      </div>
      <figure className={styles.figure} {...swipeable}>
        {stages.map(({ image }, index: number) => (
          <Image
            alt=""
            className={`${styles.image} ${currentIndex === index ? styles.featured : styles.hidden}`}
            height="1080"
            key={index}
            priority={index === 0}
            src={image}
            width="1920"
          />
        ))}
      </figure>
      <Dots
        coverIndex={currentIndex}
        onClick={onChange}
        total={stages.length}
      />
      <button
        className={`${styles.control} ${styles.previous}`}
        onClick={onPrevious}
        title={`Previous ${label}`}
        type="button"
      >
        <ChevronLeft className={styles.icon} />
      </button>
      <button
        className={`${styles.control} ${styles.next}`}
        onClick={onNext}
        title={`Next ${label}`}
        type="button"
      >
        <ChevronRight className={styles.icon} />
      </button>
      <Resize />
    </div>
  );
}
