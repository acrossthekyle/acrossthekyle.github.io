'use client';

import { useEffect } from 'react';

import { useStore } from './store';
import { type Trip } from './types';

type Model = {
  isLoading: boolean;
  trip: Trip | null;
};

export function useModel(id: string): Model {
  const { erase, fetch, isLoading, trip } = useStore();

  useEffect(() => {
    fetch(id);

    return () => {
      erase();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    trip,
  };
}
