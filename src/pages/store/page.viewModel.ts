'use client';

import { useEffect } from 'react';

import Hooks from '@/hooks';
import type { Store } from '@/types';

type Return = {
  isLoading: boolean;
  isReady: boolean;
  items: Store.Page.Item[];
};

export const useViewModel = (): Return => {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  useEffect(() => {
    fetchData('store/items');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    isReady,
    items: data || [],
  };
};

export default function Node() {
  return null;
}
