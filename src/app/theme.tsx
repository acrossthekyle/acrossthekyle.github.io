'use client'

import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: typeof window !== 'undefined' ? window.localStorage.acrossTheKyleTheme ?? 'dark' : 'dark',
  setTheme: (value: string) => {}
});

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? window.localStorage.acrossTheKyleTheme ?? 'dark' : 'dark');

  useEffect(() => {
    document.addEventListener('keyup', (event: InputEvent) => {
      if (event.key.toLowerCase() === 't') {
      	const updatedTheme = theme === 'light' ? 'dark' : 'light';

      	setTheme(updatedTheme);

    		window.localStorage.acrossTheKyleTheme = updatedTheme;
      }
    });

    return () => {
      document.removeEventListener('keyup', () => {});
    }
  }, [theme, setTheme]);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    document.body.classList.toggle('theme-light', theme !== 'dark');
  }, [theme]);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event: any) => {
      setTheme(event.matches ? 'dark' : 'light')
    });

    if (window.localStorage.acrossTheKyleTheme) {
      setTheme(window.localStorage.acrossTheKyleTheme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    }
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
