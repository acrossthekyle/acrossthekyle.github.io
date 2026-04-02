'use client'

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

export const HierarchyContext = createContext({
  current: '/',
  previous: '/',
});

export const HierarchyProvider = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();

  const [current, setCurrent] = useState('/');
  const [previous, setPrevious] = useState('/');

  const handleOnRouteChange = (value: string) => {
    setPrevious(current);
    setCurrent(value);
  };

  useEffect(() => {
    handleOnRouteChange(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <HierarchyContext.Provider value={{
      current,
      previous,
    }}>
      {children}
    </HierarchyContext.Provider>
  );
};
