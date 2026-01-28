'use client';

import { ChangeEvent, useEffect } from 'react';
import { create } from 'zustand';

import type { Data } from '../types';

type State = {
  filterBy: string;
};

type Actions = {
  setFilterBy: (value: string) => void;
};

const store = create<State & Actions>()(
  (set) => ({
    filterBy: 'everything',
    setFilterBy: (value: string) => {
      set({ filterBy: value });
    },
  }),
);

export function useModel(data: Data[], onChange: (filter: string) => void) {
  const { filterBy, setFilterBy } = store();

  useEffect(() => {
    onChange(filterBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy]);

  const handleOnTag = (value: string) => {
    setFilterBy(value);
  };

  const handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  }

  const reduced = data.reduce((items: { [key: string]: number }, { type }) => {
    items[type] = (items[type] || 0) + 1;

    return items;
  }, {});

  const types = Object.entries(reduced).map(([ value, count ]) => ({
    value,
    count,
  }));

  return {
    filterBy,
    handleOnSelect,
    handleOnTag,
    total: types.reduce((total: number, { count }) => total + count, 0),
    types,
  };
};
