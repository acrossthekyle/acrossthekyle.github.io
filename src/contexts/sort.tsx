'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type SortContextType = {
  sort: number;
  onSort: (direction: number) => void;
};

export const SortContext = createContext<SortContextType | null>(null);

export default function SortProvider({ children }: PropsWithChildren) {
  const [sort, setSort] = useState(8);

  const handleOnSort = useCallback((direction: number) => {
    setSort(direction);
  }, []);

  return (
    <SortContext.Provider value={{
      sort,
      onSort: handleOnSort,
    }}>
      {children}
    </SortContext.Provider>
  );
}
