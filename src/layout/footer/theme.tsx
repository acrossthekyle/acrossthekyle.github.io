'use client';

import { Moon, SunMedium, SunMoon } from 'lucide-react';

import { setTheme } from '@/app/actions';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function Theme({ current }: Props) {
  return (
    <section aria-label="theme controls" className={styles.controls}>
      <button
        className={styles.button(current === 'auto')}
        onClick={() => setTheme('auto')}
        type="button"
      >
        Auto <SunMoon className={styles.icon} />
      </button>
      <button
        className={styles.button(current === 'light')}
        onClick={() => setTheme('light')}
        type="button"
      >
        Light <SunMedium className={styles.icon} />
      </button>
      <button
        className={styles.button(current === 'dark')}
        onClick={() => setTheme('dark')}
        type="button"
      >
        Dark <Moon className={styles.icon} />
      </button>
    </section>
  );
}
