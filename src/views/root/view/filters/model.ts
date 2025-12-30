'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';

import { useEvent } from '@/hooks/useEvent';
import { useTheme } from '@/hooks/useTheme';

type State = {
  filterBy: string;
  orderBy: string;
  sortBy: string;
};

type Actions = {
  setFilterBy: (value: string) => void
  setOrderBy: (value: string) => void;
  setSortBy: (value: string) => void;
};

const store = create<State & Actions>()(
  (set) => ({
    filterBy: 'everything',
    orderBy: 'descending',
    sortBy: 'date',
    setFilterBy: (value: string) => {
      set({ filterBy: value });
    },
    setOrderBy: (value: string) => {
      set({ orderBy: value });
    },
    setSortBy: (value: string) => {
      set({ sortBy: value });
    },
  }),
);

export function useModel(onChange: (filter?: string, sort?: string, order?: string) => void) {
  const [isDialogActive, setIsDialogActive] = useState(false);

  const {
    filterBy,
    orderBy,
    setFilterBy,
    setOrderBy,
    setSortBy,
    sortBy,
  } = store();

  const { onToggleTheme, theme } = useTheme();

  useEffect(() => {
    onChange(filterBy, sortBy, orderBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, orderBy, sortBy]);

  const handleOnOpen = () => {
    setIsDialogActive(true);

    document.documentElement.classList.add('overflow-hidden');
  };

  const handleOnClose = () => {
    setIsDialogActive(false);

    document.documentElement.classList.remove('overflow-hidden');
  };

  const handleOnFilter = (value: string) => {
    setFilterBy(value);
  };

  const handleOnOrder = (value: string) => {
    setOrderBy(value);
  };

  const handleOnSort = (value: string) => {
    setSortBy(value);
  };

  const handleOnSwitchTheme = () => {
    onToggleTheme();
  };

  useEvent('onEscape', () => {
    if (isDialogActive) {
      handleOnClose();
    }
  });

  return {
    filterBy,
    handleOnClose,
    handleOnFilter,
    handleOnOpen,
    handleOnOrder,
    handleOnSort,
    handleOnSwitchTheme,
    isDialogActive,
    orderBy,
    sortBy,
    theme,
  };
};
