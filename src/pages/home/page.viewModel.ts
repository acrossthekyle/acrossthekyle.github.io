'use client';

import { useEffect } from 'react';

import {
  useBlogActions,
  useBlogData,
  useBlogIsLoading,
  useBlogIsReady,
} from '@/store/blog';
import type { Posts } from '@/types';

type Return = {
  isLoading: boolean;
  isReady: boolean;
  items: Posts.Post[];
};

export const useViewModel = (): Return => {
  const { get } = useBlogActions();
  const isLoading = useBlogIsLoading();
  const isReady = useBlogIsReady();
  const items = useBlogData();

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
