'use client';

import { useEffect } from 'react';

import Hooks from '@/hooks';
import type { Posts } from '@/types';

type Return = {
  isLoading: boolean;
  isReady: boolean;
  items: Pick<
    Posts.Post,
    'date' | 'image' | 'snippet' | 'tags' | 'title' | 'uri'
  >[];
};

export const useViewModel = (): Return => {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  useEffect(() => {
    fetchData('posts');
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
