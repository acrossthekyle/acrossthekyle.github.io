'use client';

import {
  ChangeEvent,
  FormEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { create } from 'zustand';

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

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [isDialogActive, setIsDialogActive] = useState(false);

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

  const handleOnDialogOpen = () => {
    dialogRef.current?.showModal();

    requestAnimationFrame(() => setIsDialogActive(true));
  };

  const handleOnDialogClose = () => {
    setIsDialogActive(false);

    const handleTransitionEnd = () => {
      dialogRef.current?.close();

      dialogRef.current?.removeEventListener('transitionend', handleTransitionEnd);
    };

    dialogRef.current?.addEventListener('transitionend', handleTransitionEnd);
  };

  const handleOnDialogSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleOnDialogClose();
  };

  const handleOnDialogCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();

    handleOnDialogClose();
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
    dialogRef,
    filterBy,
    handleOnDialogCancel,
    handleOnDialogClose,
    handleOnDialogOpen,
    handleOnDialogSubmit,
    handleOnFilter,
    handleOnOrder,
    handleOnSearch,
    handleOnSort,
    isDialogActive,
    orderBy,
    searchBy,
    sortBy,
    types,
  };
};
