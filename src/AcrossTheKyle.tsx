import './AcrossTheKyle.scss';

import React, { useEffect, useState } from 'react';

import { AcrossTheKyleComponents } from './components';
import { PaneContext } from './contexts/PaneContext';
import { getDefaultThemeContextValue, ThemeContext } from './contexts/ThemeContext';

export function AcrossTheKyle() {
  const [isPaneOpen, togglePane] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(getDefaultThemeContextValue());

  useEffect(() => {
    document.body.classList.toggle('disable-scrolling', isPaneOpen);
  }, [isPaneOpen]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PaneContext.Provider value={{ isPaneOpen, togglePane }}>
        <main className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
          <div className="please-rotate">
            <span>Please rotate your device</span>
          </div>
          <AcrossTheKyleComponents.Landing />
          <AcrossTheKyleComponents.ThruHikes />
        </main>
      </PaneContext.Provider>
    </ThemeContext.Provider>
  );
}
