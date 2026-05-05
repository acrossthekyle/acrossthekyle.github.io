'use client';

import { Eclipse, Palette } from 'lucide-react';

import { useOptions } from '@/hooks/useOptions';

import styles from './stylesheet';

export default function Images() {
  const { color, onColor } = useOptions();

  return (
    <section className={styles.controls}>
      <h3 className={styles.heading}>Photos:</h3>
      <button
        aria-label="enable monochrome-styled images"
        className={styles.button(color === 'monochrome')}
        onClick={() => onColor('monochrome')}
        type="button"
      >
        <Eclipse className={styles.icon} /> Monochrome
      </button>
      <button
        aria-label="enable colorized images"
        className={styles.button(color === 'colorized')}
        onClick={() => onColor('colorized')}
        type="button"
      >
        <Palette className={styles.icon} /> Colorized
      </button>
    </section>
  );
}
