'use client';

import { useRouter } from 'next/navigation';

import { useHistory } from '@/hooks/useHistory';

export const useModel = (fallback: string) => {
  const router = useRouter();

  const { previousRoute } = useHistory();

  const handleOnBack = () => {
    if (previousRoute !== null) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return {
    handleOnBack,
  };
};
