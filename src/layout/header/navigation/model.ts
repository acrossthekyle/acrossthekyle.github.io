'use client';

import { useState, useEffect } from 'react';

import { routes } from '@/constants';
import { useHierarchy } from '@/hooks/useHierarchy';
import { useLoad } from '@/hooks/useLoad';

import { getRoutePath } from './utils';

const DEFAULT_MOBILE_BREAKPOINT = 768;

export const useModel = (onToggle: () => void, shouldPush: boolean) => {
  const [isMobile, setIsMobile] = useState(false);

  const { isFirstLoad } = useLoad();

  const {
    isOnRoot,
    isOnParent,
    path,
  } = useHierarchy();

  const handleOnClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    base: string,
  ) => {
    if (path === base && isMobile) {
      event.preventDefault();

      onToggle();
    }
  };

  const links = routes.map((route) => ({
    ...route,
    isActive: path.includes(route.base),
    path: shouldPush ? route.base : getRoutePath(
      isOnRoot,
      route.base,
      path,
    ),
  }));

  useEffect(() => {
    const handleOnResize = () => {
      setIsMobile(window.innerWidth < DEFAULT_MOBILE_BREAKPOINT);
    };

    handleOnResize();

    window.addEventListener('resize', handleOnResize);

    return () => window.removeEventListener('resize', handleOnResize);
  }, []);

  return {
    handleOnClick,
    isFirstLoad,
    isMobile,
    isOnRoot,
    isOnParent,
    links,
  };
};
