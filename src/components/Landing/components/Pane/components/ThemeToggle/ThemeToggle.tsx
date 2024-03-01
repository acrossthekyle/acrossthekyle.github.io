import './ThemeToggle.scss';

import React, { useContext, useEffect } from 'react';

import { classNames } from '../../../../../../utils';
import { ThemeContext } from '../../../../../../contexts/ThemeContext';

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
  
  const onToggle = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(updatedTheme);

    localStorage.acrossTheKyleTheme = updatedTheme;
  };
  
  const isDark = theme === 'dark';

  return (
    <button
      aria-label="toggle theme"
      aria-checked={isDark ? 'true' : 'false'}
      className={classNames([
        'theme-toggle',
        isDark && 'theme-toggle-checked'
      ])}
      onClick={onToggle}
      role="switch"
      title="Toggle theme"
      type="button"
    >
      <span aria-hidden="true" className="theme-toggle-title">
        {isDark ? 'Dark ' : 'Light '}
      </span>
    </button>
  );
}
