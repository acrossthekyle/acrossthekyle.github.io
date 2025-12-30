'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useModel() {
  const router = useRouter();

  const handleOnReturn = useCallback(() => {
    router.back();
  }, [router]);

  return {
    handleOnReturn,
  };
};
