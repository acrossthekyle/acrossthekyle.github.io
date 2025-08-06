'use client';

import { useEffect, useState } from 'react';

import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

type Model = {
  isLoading: boolean;
  trip: Trip | undefined;
};

export function useModel(slug: string): Model {
  const { find, isLoading } = useTrips();

  const [trip, setTrip] = useState<Trip | undefined>();

  const getTrip = async () => {
    const result = await find(slug);

    setTrip(result);
  }

  useEffect(() => {
    getTrip();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    trip,
  };
}
