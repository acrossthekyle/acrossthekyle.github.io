'use client';

import { Weight, Cylinder } from 'lucide-react';

import { useOptions } from '@/hooks/useOptions';

import styles from './stylesheet';

export default function Units() {
  const { onUnits, units } = useOptions();

  return (
    <section className={styles.controls}>
      <h3 className={styles.heading}>Units</h3>
      <button
        aria-label="enable imperial units"
        className={styles.button(units.type === 'imperial')}
        onClick={() => onUnits('imperial')}
        type="button"
      >
        <Weight className={styles.icon} /> Imperial
      </button>
      <button
        aria-label="enable metric units"
        className={styles.button(units.type === 'metric')}
        onClick={() => onUnits('metric')}
        type="button"
      >
        <Cylinder className={styles.icon} /> Metric
      </button>
    </section>
  );
}
