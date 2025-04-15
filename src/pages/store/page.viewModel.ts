'use client';

import { useEffect } from 'react';

import {
  useStoreActions,
  useStoreData,
  useStoreIsLoading,
  useStoreIsReady,
} from '@/store/store';
import type { Store } from '@/types';

type Return = {
  isLoading: boolean;
  isReady: boolean;
  items: Store.Page.Item[];
};

export const useViewModel = (): Return => {
  const { get } = useStoreActions();
  const isLoading = useStoreIsLoading();
  const isReady = useStoreIsReady();
  const items = useStoreData();

  useEffect(() => {
    get();
  }, [get]);

  return {
    isLoading,
    isReady,
    items,
  };
};

export default function Node() {
  return null;
}
