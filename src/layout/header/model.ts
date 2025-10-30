'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from './constants';
import { getRoutePath } from './utils';

export function useModel() {
  const {
    isOnGrandChild,
    isOnRoot,
    path,
  } = useHierarchy();

  return {
    isOnGrandChild,
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
