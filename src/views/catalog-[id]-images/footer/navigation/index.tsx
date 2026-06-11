'use client';

import { MoveLeft, MoveRight } from 'lucide-react';
import { useEffect } from 'react';

import type { Image } from '@/types';

import { useNavigation } from '../../hooks';

import { styles } from './stylesheet';

type Props = {
  all: Image[];
  current: number;
  id: string;
  onNavigate: (index: number) => void,
  total: number;
};

export default function Navigation(props: Props) {
  const { onNext, onPrevious } = useNavigation(props);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrevious]);

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
