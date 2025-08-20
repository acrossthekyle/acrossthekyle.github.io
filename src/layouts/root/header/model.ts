'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { routes } from './constants';
import type { Model } from './types';
import { getRoutePath } from './utils';

export function useModel(): Model {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const isOnRoot = pathname === '/';
  const isOnParent = pathname !== '/' && pathname.split('').filter(character => character === '/').length === 1;

  const parameters = searchParams.toString();

  return {
    isOnParent,
    isOnRoot,
    routes: routes.map((route) => ({
      ...route,
      isActive: pathname.includes(route.base),
      path: getRoutePath(
        isOnRoot,
        route.base,
        route.path,
        pathname,
        parameters,
      ),
    })),
  };
}
