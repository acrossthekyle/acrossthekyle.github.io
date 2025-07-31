'use client';

import { useEffect, useState } from 'react';

import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

type Model = {
  trip: Trip;
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
  }, []);

  return {
    trip,
  };
}
