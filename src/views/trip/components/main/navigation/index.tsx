'use client';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { useEvent } from '@/hooks/useEvent';

import Components from '../components';
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
      <Components.Button
        className={`${styles.control} ${styles.previous}`}
        onClick={onPrevious}
        title={`Previous ${suffix}`}
      >
        <ChevronLeft className={styles.chevron} />
      </Components.Button>
      <Components.Button
        className={`${styles.control} ${styles.next}`}
        onClick={onNext}
        title={`Next ${suffix}`}
      >
        <ChevronRight className={styles.chevron} />
      </Components.Button>
    </>
  );
}
