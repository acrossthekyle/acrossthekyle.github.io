'use client';

import { GripHorizontal, LensConcave } from 'lucide-react';

import { setView } from '@/app/actions';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function View({ current }: Props) {
  return (
    <section aria-label="display controls" className={styles.controls}>
      <button
        className={styles.button(current === 'albums')}
        onClick={() => setView('albums')}
        type="button"
      >
        <LensConcave className={`${styles.icon} ${styles.rotate}`} />
        Albums
      </button>
      <button
        className={styles.button(current === 'library')}
        onClick={() => setView('library')}
        type="button"
      >
        <GripHorizontal className={styles.icon} />
        Library
      </button>
    </section>
  );
}
