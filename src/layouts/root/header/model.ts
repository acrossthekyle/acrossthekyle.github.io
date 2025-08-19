'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Route = {
  base: string;
  path: string;
  text: string;
};

type Breadcrumb = {
  name: string;
  path: string;
};

type Model = {
  breadcrumbs: Breadcrumb[];
  current: string;
  isOnChild: boolean;
  isOnParent: boolean;
  isOnRoot: boolean;
  routes: Route[];
};

const ROUTES = [
  {
    base: '/travels',
    path: '/travels',
    text: 'Travels',
  },
  {
    base: '/contact',
    path: '/contact',
    text: 'Contact',
  },
  {
    base: '/about',
    path: '/about',
    text: 'About',
  },
];

function getBreadcrumbs(
  current: string,
  parameters: string,
  isOnParent: boolean,
) {
  const active = ROUTES.find((route) => current.includes(route.base));
  const root = {
    name: 'Menu',
    path: '/',
  };

  if (isOnParent) {
    return [root];
  }

  return [
    root,
    {
      name: active?.text || '',
      path: `${active?.base || '/'}${!!parameters ? '?' + parameters : ''}`,
    },
  ];
}

export function useModel(): Model {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [isOnRoot, setIsOnRoot] = useState(true);
  const [isOnParent, setIsOnParent] = useState(false);
  const [isOnChild, setIsOnChild] = useState(false);

  useEffect(() => {
    const slashes = pathname.split('').filter(character => character === '/');

    setIsOnRoot(pathname === '/');
    setIsOnParent(pathname !== '/' && slashes.length === 1);
    setIsOnChild(slashes.length === 2);
  }, [pathname]);

  const parameters = searchParams.toString();

  return {
    breadcrumbs: getBreadcrumbs(pathname, parameters, isOnParent),
    current: pathname,
    isOnChild,
    isOnParent,
    isOnRoot,
    routes: ROUTES.map((route) => ({
      ...route,
      path: pathname.includes(route.base) ? `${route.base}${!!parameters ? '?' + parameters : ''}` : route.path,
    })),
  };
}
