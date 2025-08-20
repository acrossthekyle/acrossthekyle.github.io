'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { useTrips } from '@/hooks/useTrips';
import type { Filter, Trip } from '@/types';

import { filterBy, getFilters } from './utils';

type Model = {
  filters: Filter[];
  isLoading: boolean;
  isOnTravels: boolean;
  trips: Trip[];
};

export function useModel(): Model {
  const [filters, setFilters] = useState<Filter[]>([]);

  const { fetch, isLoading, trips } = useTrips();

  const searchParams = useSearchParams();

  const pathname = usePathname();

  const filter = searchParams.get('filter');

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (trips) {
      setFilters(getFilters(trips));
    }
  }, [trips]);

  return {
    filters,
    isLoading,
    isOnTravels: pathname === '/travels',
    trips: filterBy(trips, filter),
  };
}
