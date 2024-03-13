import './ThemeToggle.scss';

import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../../../../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event: any) => {
      setTheme(event.matches ? 'dark' : 'light')
    });

    if (localStorage.acrossTheKyleTheme) {
      setTheme(localStorage.acrossTheKyleTheme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    }
  }, [setTheme]);

  const handleOnThemeToggle = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(updatedTheme);

    localStorage.acrossTheKyleTheme = updatedTheme;
  };

  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle"
      className={classNames({ 'theme-toggle-checked': isDark })}
      onClick={handleOnThemeToggle}
      title="Toggle theme"
      type="button"
      role="switch"
      aria-checked={isDark ? 'true' : 'false'}
      aria-label="toggle theme"
    >
      <span className="theme-toggle-title" aria-hidden="true">
        {isDark ? 'Dark ' : 'Light '}
      </span>
    </button>
  );
}
