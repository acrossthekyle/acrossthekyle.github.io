'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { useTravels } from '@/hooks/useTravels';
import type { Filter } from '@/types';
import { getDate } from '@/utils';

import { filterBy, getFilters } from './utils';

type Travel = {
  meta: string[];
  path: string;
  text: string[];
};

type Model = {
  filters: Filter[];
  isLoading: boolean;
  isOnTravels: boolean;
  ref: React.RefObject<HTMLAnchorElement | null>;
  total: number;
  travels: Travel[];
};

export function useModel(): Model {
  const ref = useRef<HTMLAnchorElement | null>(null);

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
    ref,
    total: filters.reduce((total, filter) => total + filter.count, 0),
    travels: filterBy(travels, filter).map((travel) => ({
      meta: [travel.type, getDate(travel.date)],
      path: `/travels/${travel.slug}`,
      text: travel.title,
    })),
  };
}
