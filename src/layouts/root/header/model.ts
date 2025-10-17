'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from './constants';
import type { Model } from './types';
import { getRoutePath } from './utils';

export function useModel(): Model {
  const {
    isOnParent,
    isOnRoot,
    path,
  } = useHierarchy();

  return {
    isOnParent,
    isOnRoot,
    routes: routes.map((route) => ({
      ...route,
      isActive: path.includes(route.base),
      path: getRoutePath(
        isOnRoot,
        route.base,
        path,
      ),
    })),
  };
}
