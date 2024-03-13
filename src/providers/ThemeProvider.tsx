import React, { useEffect, useState } from 'react';

import { Contexts } from '../contexts';

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(localStorage.acrossTheKyleTheme ?? 'light');

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    document.body.classList.toggle('theme-light', theme !== 'dark');
  }, [theme]);

  return (
    <Contexts.ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </Contexts.ThemeContext.Provider>
  );
}
