'use client';

import { useRouter } from 'next/navigation';

import { useHierarchy } from '@/hooks/useHierarchy';

import { routes } from '../constants';
import type { Model } from './types';

export function useModel(): Model {
  const router = useRouter();

  const {
    isOnChild,
    isOnParent,
    isOnRoot,
    path,
    searchParameters,
  } = useHierarchy();

  const handleOnBack = () => {
    if (isOnChild) {
      const route = routes.find(route => path.includes(route.base));

      if (route) {
        router.push(`${route.base}${searchParameters ? '?' : ''}${searchParameters}`);

        return;
      }
    }

    router.push('/');
  };

  return {
    handleOnBack,
    isOnParent,
    isOnRoot,
  };
}
