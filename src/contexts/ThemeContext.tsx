import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: getDefaultThemeContextValue(),
  setTheme: (value: string) => {}
});

export function getDefaultThemeContextValue() {
  return localStorage.acrossTheKyleTheme ?? 'light';
}