'use client';

import { useContext, useEffect, useState } from 'react';

import Contexts from '@/contexts';

import Button from '../../button';

function updateThemeColorMetaTag(theme: string) {
  document
    .querySelector(`meta[name="theme-color"]`)
    .setAttribute('content', '#1d1d1d');

  document
    .querySelector(`meta[name="msapplication-navbutton-color"]`)
    .setAttribute('content', '#1d1d1d');
}

function Theme() {
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

  return (
    <Button
      mode="tertiary"
      onClick={handleOnClick}
      text={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    />
  );
}

export default Theme;
