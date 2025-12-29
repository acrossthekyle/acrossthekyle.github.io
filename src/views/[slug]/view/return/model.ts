'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

export function useModel() {
  const router = useRouter();

  const { isOnRoot } = useHierarchy();

  const handleOnReturn = useCallback(() => {
    router.back();
  }, [router]);

  return {
    canRender: !isOnRoot,
    handleOnReturn,
  };
};
