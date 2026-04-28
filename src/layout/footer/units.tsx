'use client';

import { Cylinder, Weight } from 'lucide-react';

import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

export default function Units() {
  const { onUnits, units } = useUnits();

  const handleOnChange = (value: string) => {
    onUnits(value);
  };

  return (
    <>
      <button
        className={styles.button(units === 'imperial')}
        onClick={() => handleOnChange('imperial')}
        title="Imperial units"
        type="button"
      >
        <Weight className={styles.icon} />
      </button>
      <button
        className={styles.button(units === 'metric')}
        onClick={() => handleOnChange('metric')}
        title="Metric units"
        type="button"
      >
        <Cylinder className={styles.icon} />
      </button>
    </>
  );
}
