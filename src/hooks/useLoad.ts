'use client';

import { useContext } from 'react';

import { LoadContext } from '@/contexts/load';

type Model = {
  isFirstLoad: boolean;
  path: string;
  previous: string;
};

export function useLoad(): Model {
  const context = useContext(LoadContext);

  return context;
}
