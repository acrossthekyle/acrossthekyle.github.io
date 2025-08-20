'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { routes } from './constants';
import type { Model } from './types';
import { getRoutePath } from './utils';

export function useModel(): Model {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const segments = pathname.split('').filter(character => character === '/');

  const isOnRoot = pathname === '/';
  const isOnParent = pathname !== '/' && segments.length === 1;
  const isOnChild = segments.length === 2;

  const parameters = searchParams.toString();

  const handleOnBack = () => {
    if (isOnChild) {
      const path = routes.find(route => pathname.includes(route.base));

      if (path) {
        router.push(`${path.base}${parameters ? '?' : ''}${parameters}`.trim());

        return;
      }
    }

    router.push('/');
  };

  return {
    handleOnBack,
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
