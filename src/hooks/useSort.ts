'use client';

import { useContext } from 'react';

import { SortContext } from '@/contexts/sort';

export function useSort() {
  const context = useContext(SortContext);

  if (context === null) {
    throw new Error('sort context not ready');
  }

  return context;
}
