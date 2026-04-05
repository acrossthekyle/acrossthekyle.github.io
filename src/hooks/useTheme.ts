'use client';

import { useEffect, useState } from 'react';

export function useTheme() {
  const [current, setCurrent] = useState('auto');

  useEffect(() => {
    // necessary for next.js applications
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(localStorage.getItem('theme') || 'auto');
  }, []);

  const onToggleTheme = () => {
    let theme = '';

    if (current === 'auto') {
      theme = 'light';
    } else if (current === 'light') {
      theme = 'dark';
    } else if (current === 'dark') {
      theme = 'auto';
    }

    localStorage.setItem('theme', theme);

    setCurrent(theme);

    const element = document.querySelector('html');

    if (element) {
      let value = theme;

      if (theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        value = prefersDark ? 'dark' : 'light';
      }

      element.setAttribute('data-theme', value);
    }
  };

  return {
    onToggleTheme,
    theme: current,
  }
}
