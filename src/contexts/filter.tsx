'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type FilterContextType = {
  filterId: string | null;
  filterIsFromSearch: boolean;
  filterType: string | null;
  filterView: string | null;
  isFiltering: boolean;
  onFilter: (type: string, value: string, currentView: string, isFromSearch?: boolean) => void;
  onUnfilter: () => void;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export default function FilterProvider({ children }: PropsWithChildren) {
  const [filterId, setFilterId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterView, setFilterView] = useState<string | null>(null);
  const [filterIsFromSearch, setFilterIsFromSearch] = useState(false);

  const handleOnFilter = useCallback((type: string, value: string, currentView: string, isFromSearch?: boolean) => {
    setFilterType(type.toLowerCase());
    setFilterId(value.toLowerCase());
    setFilterView(currentView);
    setFilterIsFromSearch(isFromSearch || false);
  }, []);

  const handleOnUnfilter = useCallback(() => {
    setFilterId(null);
    setFilterType(null);
    setFilterView(null);
  }, []);

  return (
    <FilterContext.Provider value={{
      filterId,
      filterIsFromSearch,
      filterType,
      filterView,
      isFiltering: filterId !== null,
      onFilter: handleOnFilter,
      onUnfilter: handleOnUnfilter,
    }}>
      {children}
    </FilterContext.Provider>
  );
}
