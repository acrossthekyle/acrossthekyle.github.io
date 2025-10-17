'use client';

import { useRouter } from 'next/navigation';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';

export function useModel() {
  const router = useRouter();

  const {
    isOnChild,
    isOnGrandChild,
    isOnParent,
    isOnRoot,
    path,
  } = useHierarchy();

  let uri = '/';

  if (isOnChild) {
    const route = routes.find(route => path.includes(route.base));

    if (route) {
      uri = route.base;
    }
  }

  const handleOnBack = () => {
    router.back();
  };

  return {
    handleOnBack,
    isOnGrandChild,
    isOnParent,
    isOnRoot,
    uri,
  };
}
