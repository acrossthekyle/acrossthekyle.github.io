'use client';

import { useContext } from 'react';

import { UnitsContext } from '@/contexts/units';

export function useUnits() {
  const context = useContext(UnitsContext);

  if (context === null) {
    throw new Error('units context not ready');
  }

  return context;
}
