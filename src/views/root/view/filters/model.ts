'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';

import { useEvent } from '@/hooks/useEvent';

type State = {
  filterBy: string;
  sortBy: string;
};

type Actions = {
  setFilterBy: (value: string) => void
  toggleSortBy: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    filterBy: 'everything',
    sortBy: 'date',
    setFilterBy: (value: string) => {
      set({ filterBy: value });
    },
    toggleSortBy: () => {
      set({ sortBy: get().sortBy === 'date' ? 'title' : 'date' });
    },
  }),
);

export function useModel(onChange: (filter?: string, sort?: string) => void) {
  const [isDialogActive, setIsDialogActive] = useState(false);

  const {
    filterBy,
    setFilterBy,
    sortBy,
    toggleSortBy,
  } = store();

  useEffect(() => {
    onChange(filterBy, sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, sortBy]);

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
    handleOnSort,
    isDialogActive,
    sortBy,
  };
};
