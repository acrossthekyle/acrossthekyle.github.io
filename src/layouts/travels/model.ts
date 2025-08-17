'use client';

import { useEffect } from 'react';

import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

type Model = {
  isLoading: boolean;
  trips: Trip[];
};

export function useModel(): Model {
  const { fetch, isLoading, trips } = useTrips();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    trips,
  };
}
