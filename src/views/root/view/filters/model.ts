'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';

import { useEvent } from '@/hooks/useEvent';

type State = {
  filterBy: string;
  orderBy: string;
  sortBy: string;
};

type Actions = {
  setFilterBy: (value: string) => void
  toggleOrderBy: () => void;
  toggleSortBy: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    filterBy: 'everything',
    orderBy: 'descending',
    sortBy: 'date',
    setFilterBy: (value: string) => {
      set({ filterBy: value });
    },
    toggleOrderBy: () => {
      set({ orderBy: get().orderBy === 'descending' ? 'ascending' : 'descending' });
    },
    toggleSortBy: () => {
      set({ sortBy: get().sortBy === 'date' ? 'title' : 'date' });
    },
  }),
);

export function useModel(onChange: (filter?: string, sort?: string, order?: string) => void) {
  const [isDialogActive, setIsDialogActive] = useState(false);

  const {
    filterBy,
    orderBy,
    setFilterBy,
    sortBy,
    toggleOrderBy,
    toggleSortBy,
  } = store();

  useEffect(() => {
    onChange(filterBy, sortBy, orderBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, orderBy, sortBy]);

  const handleOnFilter = () => {
    setIsDialogActive(previous => !previous);

    document.documentElement.classList.add('overflow-hidden');
  };

  const handleOnClose = () => {
    setIsDialogActive(false);

    document.documentElement.classList.remove('overflow-hidden');
  };

  const handleOnChoose = (value: string) => {
    setFilterBy(value);

    handleOnClose();
  };

  const handleOnOrder = () => {
    toggleOrderBy();
  };

  const handleOnSort = () => {
    toggleSortBy();
  };

  useEvent('onEscape', () => {
    if (isDialogActive) {
      handleOnClose();
    }
  });

  return {
    filterBy,
    handleOnChoose,
    handleOnClose,
    handleOnFilter,
    handleOnOrder,
    handleOnSort,
    isDialogActive,
    orderBy,
    sortBy,
  };
};
