'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { useMenu } from '@/hooks/useMenu';

import { styles } from './stylesheet';

export default function Theme() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  const { isActive } = useMenu();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const handleOnClick = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    }

    if (resolvedTheme === 'light') {
      setTheme('dark');
    }
  };

  if (!mounted) {
    return null
  }

  return (
    <button
      className={styles.container(isActive)}
      onClick={handleOnClick}
      title="Toggle theme"
      type="button"
    >
      <span className={styles.inner(resolvedTheme === 'dark')}>Dark</span>
      <span>/</span>
      <span className={styles.inner(resolvedTheme === 'light')}>Light</span>
    </button>
  );
}
