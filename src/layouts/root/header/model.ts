'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Route = {
  base: string;
  path: string;
  text: string;
};

type Model = {
  current: string;
  handleOnBack: () => void;
  isOnChild: boolean;
  isOnParent: boolean;
  isOnRoot: boolean;
  routes: Route[];
};

const ROUTES = [
  {
    base: '/about',
    path: '/about',
    text: 'About',
  },
  {
    base: '/wanderings',
    path: '/wanderings',
    text: 'Wanderings',
  },
  {
    base: '/contact',
    path: '/contact',
    text: 'Contact',
  },
];

export function useModel(): Model {
  const pathname = usePathname();

  const router = useRouter();

  const [isOnRoot, setIsOnRoot] = useState(true);
  const [isOnParent, setIsOnParent] = useState(false);
  const [isOnChild, setIsOnChild] = useState(false);

  useEffect(() => {
    const slashes = pathname.split('').filter(character => character === '/');

    setIsOnRoot(pathname === '/');
    setIsOnParent(pathname !== '/' && slashes.length === 1);
    setIsOnChild(slashes.length === 2);
  }, [pathname]);

  const handleOnBack = () => {
    if (isOnChild) {
      const path = ROUTES.find(route => pathname.includes(route.base));

      if (path) {
        router.push(path.base);
      } else {
        router.push('/');
      }
    } else if (isOnParent) {
      router.push('/');
    }
  };

  return {
    current: pathname,
    handleOnBack,
    isOnChild,
    isOnParent,
    isOnRoot,
    routes: ROUTES,
  };
}
