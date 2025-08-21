'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { useTravels } from '@/hooks/useTravels';
import type { Filter, Travel } from '@/types';

import { filterBy, getFilters } from './utils';

type Model = {
  filters: Filter[];
  isLoading: boolean;
  isOnTravels: boolean;
  travels: Travel[];
};

export function useModel(): Model {
  const [filters, setFilters] = useState<Filter[]>([]);

  const { all, isLoading, travels } = useTravels();

  const searchParams = useSearchParams();

  const pathname = usePathname();

  const filter = searchParams.get('filter');

  useEffect(() => {
    all();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (travels) {
      setFilters(getFilters(travels));
    }
  }, [travels]);

  return {
    filters,
    isLoading,
    isOnTravels: pathname === '/travels',
    travels: filterBy(travels, filter),
  };
}
