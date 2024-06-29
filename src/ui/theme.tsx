'use client';

import { useEffect, useState } from 'react';

function Theme() {
  const [current, setCurrent] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');

      if (saved !== null) {
        setCurrent(saved);
        document.querySelector('html').setAttribute('data-theme', saved);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrent('dark');
        document.querySelector('html').setAttribute('data-theme', 'dark');
      } else {
        setCurrent('light');
        document.querySelector('html').setAttribute('data-theme', 'light');
      }
    }
  }, []);

  const handleOnClick = () => {
    const theme = current === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', theme);

    document.querySelector('html').setAttribute('data-theme', theme);

    setCurrent(theme);
  };

  return (
    <button
      aria-label={`change to ${current === 'dark' ? 'light' : 'dark'} theme`}
      onClick={handleOnClick}
      type="button"
    >
      Switch to {current === 'dark' ? 'light' : 'dark'} theme
    </button>
  );
}

export default Theme;
