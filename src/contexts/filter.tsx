'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type FilterContextType = {
  filterId: string | null;
  filterType: string | null;
  isFiltering: boolean;
  onFilter: (type: string, value: string) => void;
  onUnfilter: () => void;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export default function FilterProvider({ children }: PropsWithChildren) {
  const [filterId, setFilterId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);

  const handleOnFilter = useCallback((type: string, value: string) => {
    setFilterType(type.toLowerCase());
    setFilterId(value.toLowerCase());
  }, []);

  const handleOnUnfilter = useCallback(() => {
    setFilterId(null);
    setFilterType(null);
  }, []);

  return (
    <FilterContext.Provider value={{
      filterId,
      filterType,
      isFiltering: filterId !== null,
      onFilter: handleOnFilter,
      onUnfilter: handleOnUnfilter,
    }}>
      {children}
    </FilterContext.Provider>
  );
}
