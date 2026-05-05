'use client';

import { useContext } from 'react';

import { OptionsContext } from '@/contexts/options';

export function useOptions() {
  const context = useContext(OptionsContext);

  if (context === null) {
    throw new Error('options context not ready');
  }

  return context;
}
