'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';
import type { Model } from './types';

export function useModel(): Model {
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

    uri = parts.slice(0, -1).join('/');
    uri = `${uri}#${parts[parts.length - 1]}`;
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
