'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

type Model = {
  isLoading: boolean;
  isOnTrip: boolean;
  trips: Trip[];
};

export function useModel(): Model {
  const pathname = usePathname();

  const { fetch, isLoading, trips } = useTrips();

  const [isOnTrip, setIsOnTrip] = useState(false);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsOnTrip(pathname.includes('/trips/'));
  }, [pathname]);

  return {
    isLoading,
    isOnTrip,
    trips,
  };
}
