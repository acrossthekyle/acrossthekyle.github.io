'use client';

import { useContext } from 'react';

import { HistoryContext } from '@/contexts/history';

type Hook = {
  previousRoute: string | null;
};

export function useHistory(): Hook {
  const context = useContext(HistoryContext);

  return context;
}
