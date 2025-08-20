import { routes } from './constants';
import type { Breadcrumb } from './types';

export function getBreadcrumbs(
  current: string,
  parameters: string,
  isOnParent: boolean,
): Breadcrumb[] {
  const root = {
    name: 'Menu',
    path: '/',
  };

  if (isOnParent) {
    return [root];
  }

  const active = routes.find((route) => current.includes(route.base));

  return [
    root,
    {
      name: active?.text || '',
      path: `${active?.base || '/'}${!!parameters ? '?' + parameters : ''}`,
    },
  ];
}

export function getRoutePath(
  isOnRoot: boolean,
  base: string,
  route: string,
  pathname: string,
  parameters: string,
): string {
  if (isOnRoot) {
    return route;
  }

  if (pathname === base) {
    return '/';
  }

  return pathname.includes(base)
    ? `${base}${!!parameters ? '?' + parameters : ''}`
    : base;
}
