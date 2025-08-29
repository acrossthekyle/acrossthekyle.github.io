'use client';

import { useContext } from 'react';

import { HierarchyContext } from '@/contexts/hierarchy';

type Model = {
  base: string;
  isOnChild: boolean;
  isOnParent: boolean;
  isOnRoot: boolean;
  path: string;
  previous: string;
  searchParameters: string;
};

export function useHierarchy(): Model {
  const context = useContext(HierarchyContext);

  return context;
}
