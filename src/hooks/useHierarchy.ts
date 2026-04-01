'use client';

import { useContext } from 'react';

import { HierarchyContext } from '@/contexts/hierarchy';

export const useHierarchy = () => {
  return useContext(HierarchyContext);
};
