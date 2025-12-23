'use client';

import { routes } from '@/constants';
import { useHierarchy } from '@/hooks/useHierarchy';
import { useLoad } from '@/hooks/useLoad';
import { useMobile } from '@/hooks/useMobile';

import { getRoutePath } from './utils';

export const useModel = (onToggle: () => void, shouldPush: boolean) => {
  const { isMobile } = useMobile();

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

  return {
    handleOnClick,
    isFirstLoad,
    isMobile,
    isOnRoot,
    isOnParent,
    links,
  };
};
