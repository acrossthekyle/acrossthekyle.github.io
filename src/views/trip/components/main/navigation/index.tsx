'use client';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

type Props = {
  onNext: () => void;
  onPrevious: () => void;
  suffix: string;
};

export default function Images({
  onNext,
  onPrevious,
  suffix,
}: Props) {
  useEvent('onLeft', (id: string) => {
    if (id === 'modal') {
      onPrevious();
    }
  });

  useEvent('onRight', (id: string) => {
    if (id === 'modal') {
      onNext();
    }
  });

  return (
    <>
      <button
        className={`${styles.control} ${styles.previous}`}
        onClick={onPrevious}
        title={`Previous ${suffix}`}
        type="button"
      >
        <ChevronLeft className={styles.chevron} />
      </button>
      <button
        className={`${styles.control} ${styles.next}`}
        onClick={onNext}
        title={`Next ${suffix}`}
        type="button"
      >
        <ChevronRight className={styles.chevron} />
      </button>
    </>
  );
}
