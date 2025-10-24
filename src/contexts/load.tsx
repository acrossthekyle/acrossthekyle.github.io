'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const LoadContext = createContext({
  isFirstLoad: true,
  path: '',
  previous: '',
});

export default function Load({ children }: Props) {
  const current = usePathname();

  const [isFirstLoad, setIsFirstLoad] = useState(current === '/');

  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = current;
  });

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoad(false);
    }, 500);
  }, []);

  return (
    <LoadContext.Provider
      value={{
        isFirstLoad,
        path: current,
        previous: ref.current !== null ? ref.current : '',
      }}
    >
      {children}
    </LoadContext.Provider>
  );
};
