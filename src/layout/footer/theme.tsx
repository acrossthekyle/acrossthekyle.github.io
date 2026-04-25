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
    <>
      <button
        className={styles.button(theme === 'system')}
        onClick={() => setTheme('system')}
        title="System theme"
        type="button"
      >
        <Monitor className={styles.icon} />
      </button>
      <button
        className={styles.button(theme === 'light')}
        onClick={() => setTheme('light')}
        title="Light theme"
        type="button"
      >
        <Sun className={styles.icon} />
      </button>
      <button
        className={styles.button(theme === 'dark')}
        onClick={() => setTheme('dark')}
        title="Dark theme"
        type="button"
      >
        <Moon className={styles.icon} />
      </button>
    </>
  );
}
