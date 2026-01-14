'use client';

import { useEffect, useState } from 'react';

export function useTheme() {
  const [current, setCurrent] = useState('light');

  useEffect(() => {
    setCurrent(localStorage.getItem('theme') || 'light');
  }, []);

  const onToggleTheme = () => {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') || 'light';
    }

    const value = theme === 'dark' ? 'light' : 'dark';

    setCurrent(value);

    localStorage.setItem('theme', value);

    const element = document.querySelector('html');

    if (element) {
      element.setAttribute('data-theme', value);
    }

    if (window.location.href.includes('gpx')) {
      window.location.reload();
    }
  };

  return {
    onToggleTheme,
    theme: current,
  }
}
