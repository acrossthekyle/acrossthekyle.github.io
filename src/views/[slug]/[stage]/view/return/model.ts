'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useModel(slug: string) {
  const router = useRouter();

  const handleOnReturn = useCallback(() => {
    if (
      document.referrer &&
      new URL(document.referrer).hostname === window.location.hostname
    ) {
      router.back();
    } else {
      router.push(`/${slug}`);
    }
  }, [router, slug]);

  return {
    handleOnReturn,
  };
};
