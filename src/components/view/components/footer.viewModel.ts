'use client';

import { useEffect } from 'react';

import {
  useFooterActions,
  useFooterIsLoading,
  useFooterIsReady,
  useFooterRecentsData,
  useFooterTagsData,
} from '@/store/footer';
import type { Posts } from '@/types';

type Return = {
  isPostsLoading: boolean;
  isPostsReady: boolean;
  isTagsLoading: boolean;
  isTagsReady: boolean;
  posts: Pick<Posts.Post, 'date' | 'image' | 'title' | 'uri'>[];
  tags: string[];
};

export const useViewModel = (): Return => {
  const { get } = useFooterActions();

  const isLoading = useFooterIsLoading();
  const isReady = useFooterIsReady();
  const recents = useFooterRecentsData();
  const tags = useFooterTagsData();

  useEffect(() => {
    get();
  }, [get]);

  return {
    isPostsLoading: isLoading,
    isPostsReady: isReady,
    isTagsLoading: isLoading,
    isTagsReady: isReady,
    posts: recents,
    tags,
  };
};

export default function Node() {
  return null;
}
