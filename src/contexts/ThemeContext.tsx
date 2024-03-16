import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: localStorage.acrossTheKyleTheme ?? 'dark',
  setTheme: (value: string) => {}
});
