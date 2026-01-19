'use client';

import { useEffect } from 'react';
import { create } from 'zustand';

import type { Data } from '../types';

type State = {
  filterBy: string;
  orderBy: string;
  sortBy: string;
};

type Actions = {
  setFilterBy: (value: string) => void;
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

export function useModel(
  data: Data[],
  onChange: (filter: string, sort: string, order: string) => void,
) {
  const {
    filterBy,
    orderBy,
    setFilterBy,
    setOrderBy,
    setSortBy,
    sortBy,
  } = store();

  useEffect(() => {
    onChange(filterBy, sortBy, orderBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, orderBy, sortBy]);

  const handleOnFilter = (value: string) => {
    setFilterBy(value);
  };

  const handleOnOrder = (value: string) => {
    setOrderBy(value);
  };

  const handleOnSort = (value: string) => {
    setSortBy(value);
  };

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
    handleOnFilter,
    handleOnOrder,
    handleOnSort,
    orderBy,
    sortBy,
    types,
  };
};
