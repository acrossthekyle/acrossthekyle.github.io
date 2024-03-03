import './AcrossTheKyle.scss';

import React, { useEffect, useState } from 'react';

import { AcrossTheKyleComponents } from './components';
import { ScrollContext } from './contexts/ScrollContext';
import { getDefaultThemeContextValue, ThemeContext } from './contexts/ThemeContext';

export function AcrossTheKyle() {
  const [canScroll, toggleCanScroll] = useState(true);
  const [theme, setTheme] = useState(getDefaultThemeContextValue());

  useEffect(() => {
    document.body.classList.toggle('disable-scrolling', !canScroll);
  }, [canScroll]);

  const handleOnToggleCanScroll = () => {
    toggleCanScroll(!canScroll);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ScrollContext.Provider value={{ canScroll, toggleCanScroll: handleOnToggleCanScroll }}>
        <main className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
          <div className="please-rotate">
            <span>Please rotate your device</span>
          </div>
          <AcrossTheKyleComponents.Landing />
          <AcrossTheKyleComponents.ThruHikes />
        </main>
      </ScrollContext.Provider>
    </ThemeContext.Provider>
  );
}
