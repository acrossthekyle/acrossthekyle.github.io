'use client';

import { useContext } from 'react';

import Contexts from '@/contexts';
import Styles from '@/styles';

import Button from '../../button';

const scss = Styles.Components.View.Components.Theme;

function Theme() {
  const { theme, setTheme } = useContext(Contexts.ThemeContext);

  const handleOnClick = () => {
    const value = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', value);

    document.querySelector('html').setAttribute('data-theme', value);

    setTheme(value);
  };

  return (
    <button
      className={scss.toggle}
      onClick={handleOnClick}
      title="Toggle light &amp; dark theme"
      aria-label={theme}
      aria-live="polite"
    >
      <svg
        className={scss.sunAndMoon}
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 24 24"
      >
        <mask className={scss.moon} id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
          <circle cx="24" cy="10" r="6" fill="black"></circle>
        </mask>
        <circle
          className={scss.sun}
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        ></circle>
        <g className={scss.sunBeams} stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </g>
      </svg>
    </button>
  );
}

export default Theme;
