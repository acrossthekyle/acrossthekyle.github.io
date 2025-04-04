'use client';

import { useContext, useEffect, useState } from 'react';

import Contexts from '@/contexts';

function Theme() {
  const { theme, setTheme } = useContext(Contexts.ThemeContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');

      if (saved !== null) {
        setTheme(saved);
        document.querySelector('html').setAttribute('data-theme', saved);
      } else {
        setTheme('light');
        document.querySelector('html').setAttribute('data-theme', 'light');
      }
    }
  }, [setTheme]);

  const handleOnClick = () => {
    const value = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', value);

    document.querySelector('html').setAttribute('data-theme', value);

    setTheme(value);
  };

  return (
    <button
      aria-label={`switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={handleOnClick}
      type="button"
    >
      Switch to {theme === 'dark' ? 'light' : 'dark'} theme
    </button>
  );
}

export default Theme;
