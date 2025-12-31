'use client';

import { useContext } from 'react';

import { HierarchyContext } from '@/contexts/hierarchy';

type Hook = {
  base: string;
  isOnChild: boolean;
  isOnGrandChild: boolean;
  isOnParent: boolean;
  isOnRoot: boolean;
  path: string;
  previous: string;
};

export function useHierarchy(): Hook {
  const context = useContext(HierarchyContext);

  return context;
}
