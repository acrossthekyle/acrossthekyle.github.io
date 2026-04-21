'use client';

import { Ruler, Scale } from 'lucide-react';

import { setUnits } from '@/app/actions';
import { useUnits } from '@/hooks/useUnits';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function Units({ current }: Props) {
  const { onChange } = useUnits();

  const handleOnChange = (value: string) => {
    onChange(value);

    setUnits(value);
  };

  return (
    <section aria-label="theme controls" className={styles.controls}>
      <button
        className={styles.button(current === 'imperial')}
        onClick={() => handleOnChange('imperial')}
        type="button"
      >
        <Ruler className={styles.icon} /> Imperial
      </button>
      <button
        className={styles.button(current === 'metric')}
        onClick={() => handleOnChange('metric')}
        type="button"
      >
        <Scale className={styles.icon} /> Metric
      </button>
    </section>
  );
}
