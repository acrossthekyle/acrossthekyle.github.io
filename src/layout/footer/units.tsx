'use client';

import { Footprints, Stone } from 'lucide-react';

import { setUnits } from '@/app/actions';
import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function Units({ current }: Props) {
  const { onUnits } = useUnits();

  const handleOnChange = (value: string) => {
    onUnits(value);

    setUnits(value);
  };

  return (
    <section aria-label="theme controls" className={styles.controls}>
      <button
        className={styles.button(current === 'imperial')}
        onClick={() => handleOnChange('imperial')}
        title="Imperial units"
        type="button"
      >
        <Footprints className={styles.icon} />
      </button>
      <button
        className={styles.button(current === 'metric')}
        onClick={() => handleOnChange('metric')}
        title="Metric units"
        type="button"
      >
        <Stone className={styles.icon} />
      </button>
    </section>
  );
}
