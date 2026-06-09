'use client';

import { MoveLeft, MoveRight } from 'lucide-react';

import type { Image } from '@/types';

import { useNavigation } from '../../hooks';

import styles from './stylesheet';

type Props = {
  all: Image[];
  current: number;
  id: string;
  total: number;
};

export default function Navigation(props: Props) {
  const { onNext, onPrevious } = useNavigation(props);

  return (
    <nav aria-label="carousel navigation" className={styles.container}>
      <button
        aria-label="previous carousel image"
        className={styles.navigate}
        onClick={onPrevious}
        type="button"
      >
        <MoveLeft className={styles.arrow} /> Prev
      </button>
      <button
        aria-label="next carousel image"
        className={styles.navigate}
        onClick={onNext}
        type="button"
      >
        Next <MoveRight className={styles.arrow} />
      </button>
    </nav>
  );
}
