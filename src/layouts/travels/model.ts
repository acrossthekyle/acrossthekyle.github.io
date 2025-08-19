'use client';

import { groupBy } from 'lodash';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useTrips } from '@/hooks/useTrips';
import type { Filter, Trip } from '@/types';
import { getStaticType } from '@/utils';

type Model = {
  filters: Filter[];
  isLoading: boolean;
  trips: Trip[];
};

function filterBy(trips: Trip[], filter: string | null) {
  if (!filter) {
    return trips;
  }

  return trips.filter((trip) => trip.type === filter.toLowerCase());
}

export function useModel(): Model {
  const [filters, setFilters] = useState<Filter[]>([]);

  const { fetch, isLoading, trips } = useTrips();

  const searchParams = useSearchParams();

  const filter = searchParams.get('filter');

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (trips) {
      const types = trips.map((trip) => trip.type);
      const groups = groupBy(types);
      const result: Filter[] = [];

      for (const item in groups) {
        result.push({
          count: groups[item].length,
          filter: item,
          name: `${getStaticType(item)}${groups[item].length > 1 ? 's' : ''}`,
        });
      }

      setFilters(result);
    }
  }, [trips]);

  return {
    filters,
    isLoading,
    trips: filterBy(trips, filter),
  };
}
