'use client';

import { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: (value: string) => {
    // noop
  },
});

const Theme = ({ children }: Props) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
