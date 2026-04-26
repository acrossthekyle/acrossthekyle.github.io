'use client';

import { useContext } from 'react';

import { SizeContext } from '@/contexts/size';

export function useSize() {
  const context = useContext(SizeContext);

  if (context === null) {
    throw new Error('size context not ready');
  }

  return context;
}
