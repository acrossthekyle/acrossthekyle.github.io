'use client';

import { useEffect } from 'react';

import Hooks from '@/hooks';

type Return = {
  email: string;
  isLoading: boolean;
  isReady: boolean;
  name: string;
};

export const useViewModel = (): Return => {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');

      const params = new URLSearchParams(new URL(window.location.href).search);

      fetchData(`store/confirmation?session_id=${params.get('session_id')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    email: data?.email || '',
    isLoading,
    isReady,
    name: data?.name || '',
  };
};

export default function Node() {
  return null;
}
