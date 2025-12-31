'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useHistory } from '@/hooks/useHistory';

export function useModel(slug: string) {
  const router = useRouter();
  const { previousRoute } = useHistory();

  const handleOnReturn = useCallback(() => {
    if (previousRoute !== null) {
      router.back();
    } else {
      router.push(`/${slug}`);
    }
  }, [previousRoute, router, slug]);

  return {
    handleOnReturn,
  };
};
