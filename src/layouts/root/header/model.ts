'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { routes } from './constants';
import type { Model } from './types';
import { getBreadcrumbs, getRoutePath } from './utils';

export function useModel(): Model {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [isOnRoot, setIsOnRoot] = useState(true);
  const [isOnParent, setIsOnParent] = useState(false);

  useEffect(() => {
    const slashes = pathname.split('').filter(character => character === '/');

    setIsOnRoot(pathname === '/');
    setIsOnParent(pathname !== '/' && slashes.length === 1);
  }, [pathname]);

  const parameters = searchParams.toString();

  return {
    breadcrumbs: getBreadcrumbs(pathname, parameters, isOnParent),
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
