'use client';

import { useContext } from 'react';

import { UnitsContext } from '@/contexts/units';

export const useUnits = () => {
  return useContext(UnitsContext);
};
