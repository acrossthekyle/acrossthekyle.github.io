'use client';

import { useRouter } from 'next/navigation';

export const useModel = () => {
  const router = useRouter();

  const handleOnNavigate = (path: string) => {
    router.replace(path);
  };

  return {
    handleOnNavigate,
  };
};
