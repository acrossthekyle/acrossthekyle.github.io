'use client';

import { useEffect, useState, createContext } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export const HistoryContext = createContext({
  previousRoute: null,
});

export default function History({ children }: Props) {
  const pathname = usePathname();

  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);

  useEffect(() => {
    setPreviousRoute(currentRoute);
    setCurrentRoute(pathname);
  }, [currentRoute, pathname]);

  return (
    // @ts-expect-error - allow null by default
    <HistoryContext.Provider value={{ previousRoute }}>
      {children}
    </HistoryContext.Provider>
  );
};
