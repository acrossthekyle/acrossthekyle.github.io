'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';

import { setTheme } from '@/app/actions';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function Theme({ current }: Props) {
  return (
    <>
      <button
        className={styles.button(current === 'auto')}
        onClick={() => setTheme('auto')}
        title="Auto theme"
        type="button"
      >
        <SunMoon className={styles.icon} />
      </button>
      <button
        className={styles.button(current === 'light')}
        onClick={() => setTheme('light')}
        title="Light theme"
        type="button"
      >
        <Sun className={styles.icon} />
      </button>
      <button
        className={styles.button(current === 'dark')}
        onClick={() => setTheme('dark')}
        title="Dark theme"
        type="button"
      >
        <Moon className={styles.icon} />
      </button>
    </>
  );
}
