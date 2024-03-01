import './AcrossTheKyle.scss';

import React, { useState } from 'react';

import { AcrossTheKyleComponents } from './components';
import { getDefaultThemeContextValue, ThemeContext } from './contexts/ThemeContext';

export function AcrossTheKyle() {
  const [theme, setTheme] = useState<string>(getDefaultThemeContextValue());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
        <div className="please-rotate">
          <span>Please resize your device screen</span>
        </div>
        <AcrossTheKyleComponents.Landing />
        <AcrossTheKyleComponents.ThruHikes />
      </main>
    </ThemeContext.Provider>
  );
}
