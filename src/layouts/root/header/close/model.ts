'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';
import type { Model } from './types';

export function useModel(): Model {
  const {
    isOnChild,
    isOnParent,
    isOnRoot,
    path,
  } = useHierarchy();

  let uri = '/';

  if (isOnChild) {
    const route = routes.find(route => path.includes(route.base));

    if (route) {
      uri = route.base;
    }
  };

  return {
    isOnParent,
    isOnRoot,
    uri,
  };
}
