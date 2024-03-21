'use client'

import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const DARK = 'dark';
const LIGHT = 'light';

export const ThemeContext = createContext({
  theme: typeof window !== 'undefined' ? window.localStorage.acrossTheKyleTheme ?? DARK : DARK,
  setTheme: (value: string) => {}
});

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? window.localStorage.acrossTheKyleTheme ?? DARK : DARK);

  useEffect(() => {
    document.addEventListener('keyup', (event: InputEvent) => {
      if (event.key.toLowerCase() === 't') {
      	const updatedTheme = theme === LIGHT ? DARK : LIGHT;

      	setTheme(updatedTheme);

    		window.localStorage.acrossTheKyleTheme = updatedTheme;
      }
    });

    return () => {
      document.removeEventListener('keyup', () => {});
    }
  }, [theme, setTheme]);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === DARK);
    document.body.classList.toggle('theme-light', theme !== DARK);
  }, [theme]);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event: any) => {
      setTheme(event.matches ? DARK : LIGHT)
    });

    if (window.localStorage.acrossTheKyleTheme) {
      setTheme(window.localStorage.acrossTheKyleTheme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT);
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
