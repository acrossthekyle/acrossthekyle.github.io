'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import styles from './stylesheet';

export default function Theme() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className={styles.controls}>
      <h3 className={styles.heading}>Theme:</h3>
      <button
        aria-label="theme mirrors system settings"
        className={styles.button(theme === 'system')}
        onClick={() => setTheme('system')}
        title="System theme"
        type="button"
      >
        <Monitor className={styles.icon} /> Auto
      </button>
      <button
        aria-label="enable light theme"
        className={styles.button(theme === 'light')}
        onClick={() => setTheme('light')}
        type="button"
      >
        <Sun className={styles.icon} /> Light
      </button>
      <button
        aria-label="enable dark theme"
        className={styles.button(theme === 'dark')}
        onClick={() => setTheme('dark')}
        type="button"
      >
        <Moon className={styles.icon} /> Dark
      </button>
    </section>
  );
}
