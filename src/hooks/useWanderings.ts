'use client';

import { create } from 'zustand';

import { useEvent } from './useEvent';

type State = {
  isFilterByActive: boolean;
  filterBy: string;
  sortBy: string;
};

type Actions = {
  closeFilterBy: () => void;
  openFilterBy: () => void;
  setFilterBy: (value: string) => void;
  toggleSortBy: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    isFilterByActive: false,
    filterBy: 'everything',
    sortBy: 'date',
    closeFilterBy: () => {
      set({ isFilterByActive: false });
    },
    openFilterBy: () => {
      set({ isFilterByActive: true });
    },
    setFilterBy: (value: string) => {
      set({ filterBy: value });
    },
    toggleSortBy: () => {
      set({ sortBy: get().sortBy === 'date' ? 'title' : 'date' });
    },
  }),
);

export function useWanderings() {
  const {
    closeFilterBy,
    isFilterByActive,
    filterBy,
    openFilterBy,
    setFilterBy,
    sortBy,
    toggleSortBy,
  } = store();

  const close = () => {
    closeFilterBy();

    document.documentElement.classList.remove('overflow-hidden');
  };

  const filter = () => {
    openFilterBy();

    document.documentElement.classList.add('overflow-hidden');
  };

  const choose = (value: string) => {
    setFilterBy(value);

    close();
  };

  const sort = () => {
    toggleSortBy();
  };

  useEvent('onEscape', () => {
    if (isFilterByActive) {
      close();
    }
  });

  return {
    choose,
    close,
    filter,
    filterBy,
    isFilterByActive,
    sort,
    sortBy,
  };
}
