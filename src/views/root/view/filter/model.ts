'use client';

import { ChangeEvent, useEffect } from 'react';
import { create } from 'zustand';

import { useEvent } from '@/hooks/useEvent';

import type { Data } from '../types';

type State = {
  filterBy: string;
  orderBy: string;
  searchBy: string;
  sortBy: string;
};

type Actions = {
  setFilterBy: (value: string) => void;
  setOrderBy: (value: string) => void;
  setSearchBy: (value: string) => void;
  setSortBy: (value: string) => void;
};

const store = create<State & Actions>()(
  (set) => ({
    filterBy: 'everything',
    orderBy: 'descending',
    searchBy: '',
    sortBy: 'date',
    setFilterBy: (value: string) => {
      set({ filterBy: value });
    },
    setOrderBy: (value: string) => {
      set({ orderBy: value });
    },
    setSearchBy: (value: string) => {
      set({ searchBy: value });
    },
    setSortBy: (value: string) => {
      set({ sortBy: value });
    },
  }),
);

export function useModel(
  data: Data[],
  onChange: (
    searchBy: string,
    filter: string,
    sort: string,
    order: string,
  ) => void,
) {
  const {
    filterBy,
    orderBy,
    searchBy,
    setFilterBy,
    setOrderBy,
    setSearchBy,
    setSortBy,
    sortBy,
  } = store();

  useEffect(() => {
    onChange(searchBy, filterBy, sortBy, orderBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, orderBy, searchBy, sortBy]);

  const handleOnFilter = (value: string) => {
    setFilterBy(value);
  };

  const handleOnOrder = (value: string) => {
    setOrderBy(value);
  };

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = (event.target as HTMLInputElement).value.toLowerCase();

    setSearchBy(term);
  };

  const handleOnSort = (value: string) => {
    setSortBy(value);
  };

  const handleOnOpenDialog = () => {
    const dialog = document.getElementById('filtering');

    if (dialog) {
      (dialog as HTMLDialogElement).showModal();

      document.documentElement.classList.add('overflow-hidden');
    }
  };

  const handleOnCloseDialog = () => {
    const dialog = document.getElementById('filtering');

    if (dialog) {
      (dialog as HTMLDialogElement).close();

      document.documentElement.classList.remove('overflow-hidden');
    }
  };

  useEvent('onEscape', () => {
    handleOnCloseDialog();
  });

  const reduced = data.reduce((initialObject: { [key: string]: number }, { type }) => {
    initialObject[type] = (initialObject[type] || 0) + 1;

    return initialObject;
  }, {});

  const types = Object.entries(reduced).map(([ value, count ]) => {
    return {
      value,
      count,
    };
  });

  return {
    filterBy,
    handleOnCloseDialog,
    handleOnFilter,
    handleOnOpenDialog,
    handleOnOrder,
    handleOnSearch,
    handleOnSort,
    orderBy,
    searchBy,
    sortBy,
    types,
  };
};
