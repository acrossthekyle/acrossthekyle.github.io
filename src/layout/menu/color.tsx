'use client';

import { Contrast, Palette, SwitchCamera } from 'lucide-react';

import { useOptions } from '@/hooks/useOptions';

import styles from './stylesheet';

export default function Color() {
  const { color, onColor } = useOptions();

  return (
    <div className={styles.setting}>
      <button
        className={styles.toggle}
        type="button"
      >
        <SwitchCamera className={styles.icon} />
        Colors
      </button>
      <ul className={styles.options}>
        <li>
          <button
            aria-label="enable monochrome-styled images"
            className={styles.button(color === 'monochrome')}
            onClick={() => onColor('monochrome')}
            type="button"
          >
            <Contrast className={styles.icon} /> Grayscale
          </button>
        </li>
        <li>
          <button
            aria-label="enable colorized images"
            className={styles.button(color === 'colorized')}
            onClick={() => onColor('colorized')}
            type="button"
          >
            <Palette className={styles.icon} /> Colorized
          </button>
        </li>
      </ul>
    </div>
  );
}
