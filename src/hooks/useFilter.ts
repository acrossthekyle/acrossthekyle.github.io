'use client';

import { useContext } from 'react';

import { FilterContext } from '@/contexts/filter';

export function useFilter() {
  const context = useContext(FilterContext);

  if (context === null) {
    throw new Error('filter context not ready');
  }

  return context;
}
