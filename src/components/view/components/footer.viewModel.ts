'use client';

import { useEffect } from 'react';

import Hooks from '@/hooks';
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
  const {
    data: tags,
    fetchData: fetchTags,
    isLoading: isTagsLoading,
    isReady: isTagsReady,
  } = Hooks.useApi();

  const {
    data: posts,
    fetchData: fetchPosts,
    isLoading: isPostsLoading,
    isReady: isPostsReady,
  } = Hooks.useApi();

  useEffect(() => {
    fetchTags('tags');
    fetchPosts('posts/recent');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isPostsLoading,
    isPostsReady,
    isTagsLoading,
    isTagsReady,
    posts,
    tags,
  };
};

export default function Node() {
  return null;
}
