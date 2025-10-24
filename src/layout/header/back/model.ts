'use client';

import { useRouter } from 'next/navigation';

import { useHierarchy } from '@/hooks/useHierarchy';

export function useModel() {
  const router = useRouter();

  const {
    isOnChild,
    isOnRoot,
  } = useHierarchy();

  const handleOnBack = () => {
    router.back();
  };

  return {
    handleOnBack,
    isOnChild,
    isOnRoot,
  };
}
