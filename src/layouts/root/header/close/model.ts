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
    searchParameters,
  } = useHierarchy();

  let uri = '/';

  if (isOnChild) {
    const route = routes.find(route => path.includes(route.base));

    if (route) {
      uri = `${route.base}${searchParameters ? '?' : ''}${searchParameters}`;
    }
  };

  return {
    isOnParent,
    isOnRoot,
    uri,
  };
}
