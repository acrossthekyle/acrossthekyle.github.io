'use client';

import { Ruler, Scale } from 'lucide-react';

import { setUnits } from '@/app/actions';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function Units({ current }: Props) {
  return (
    <section aria-label="theme controls" className={styles.controls}>
      <button
        className={styles.button(current === 'imperial')}
        onClick={() => setUnits('imperial')}
        type="button"
      >
        <Ruler className={styles.icon} /> Imperial
      </button>
      <button
        className={styles.button(current === 'metric')}
        onClick={() => setUnits('metric')}
        type="button"
      >
        <Scale className={styles.icon} /> Metric
      </button>
    </section>
  );
}
