'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type FilterContextType = {
  filter: string | null;
  onFilter: (value: string | null) => void;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export default function FilterProvider({ children }: PropsWithChildren) {
  const [filter, setFilter] = useState<string | null>(null);

  const handleOnFilter = useCallback((value: string | null) => {
    setFilter(value === null ? value : value.toLowerCase());
  }, []);

  return (
    <FilterContext.Provider value={{
      filter,
      onFilter: handleOnFilter,
    }}>
      {children}
    </FilterContext.Provider>
  );
}
