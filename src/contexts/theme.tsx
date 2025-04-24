'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

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

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
