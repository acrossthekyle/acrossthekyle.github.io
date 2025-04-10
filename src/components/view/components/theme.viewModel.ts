'use client';

import { useContext, useEffect, useState } from 'react';

import Contexts from '@/contexts';

type Return = {
  handleOnClick: () => void;
  theme: string;
};

function updateThemeColorMetaTag(theme: string) {
  document
    .querySelector(`meta[name="theme-color"]`)
    .setAttribute('content', '#1d1d1d');

  document
    .querySelector(`meta[name="msapplication-navbutton-color"]`)
    .setAttribute('content', '#1d1d1d');
}

export const useViewModel = (): Return => {
  const { theme, setTheme } = useContext(Contexts.ThemeContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');

      if (saved !== null) {
        setTheme(saved);

        document.querySelector('html').setAttribute('data-theme', saved);

        updateThemeColorMetaTag(saved);
      } else {
        setTheme('light');

        document.querySelector('html').setAttribute('data-theme', 'light');

        updateThemeColorMetaTag('#ffffff');
      }
    }
  }, [setTheme]);

  const handleOnClick = () => {
    const value = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', value);

    document.querySelector('html').setAttribute('data-theme', value);

    updateThemeColorMetaTag(value);

    setTheme(value);
  };

  return {
    handleOnClick,
    theme,
  };
};

export default function Node() {
  return null;
}
