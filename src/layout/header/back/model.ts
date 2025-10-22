'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';

export function useModel() {
  const {
    isOnChild,
    isOnGrandChild,
    isOnParent,
    isOnRoot,
    path,
  } = useHierarchy();

  let uri = '/';

  if (isOnGrandChild) {
    const parts = path.split('/');
          parts.pop();

    uri = parts.join('/');
  } else if (isOnChild) {
    const route = routes.find(route => path.includes(route.base));

    if (route) {
      uri = route.base;
    }
  }

  return {
    isOnParent,
    isOnRoot,
    uri,
  };
}
