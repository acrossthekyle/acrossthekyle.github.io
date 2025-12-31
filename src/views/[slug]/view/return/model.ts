'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useHistory } from '@/hooks/useHistory';

export function useModel() {
  const router = useRouter();
  const { previousRoute } = useHistory();

  const handleOnReturn = useCallback(() => {
    if (previousRoute === '/') {
      router.back();
    } else if (previousRoute !== null && previousRoute !== '/') {
      router.back();
    } else {
      router.push('/');
    }
  }, [previousRoute, router]);

  return {
    handleOnReturn,
  };
};
