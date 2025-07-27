import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

import View from '../trip';

type Model = {
  isLoading: boolean;
  trips: Trip[];
};

export function useModel(): Model {
  const { fetch, isLoading, trips } = useTrips();

  const [query, setQuery] = useState<string | null>(null);
  const [search, setSearch] = useState<Fuse<Trip> | undefined>();

  const searchParams = useSearchParams();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchParams.has('query')) {
      setQuery(searchParams.get('query') || '');
    } else {
      setQuery(null);
    }
  }, [searchParams]);

  useEffect(() => {
    if (search === undefined && trips.length) {
      setSearch(new Fuse(trips, {
        keys: ['year', 'location', 'title'],
      }));
    }
  }, [search, trips]);

  const filter = () => {
    if (search === undefined || query === null || query === '') {
      return trips;
    }

    return search.search(query).map((result) => result.item);
  };

  return {
    isLoading,
    trips: filter(),
  };
}
