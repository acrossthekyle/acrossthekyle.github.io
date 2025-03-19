'use client';

import { useFetch } from './abstract';

export const usePostsData = () => {
  return useFetch('/api/posts');
};

export const useRecentPostsData = () => {
  return useFetch('/api/posts/recent');
};

export const usePostsTagsData = () => {
  return useFetch('/api/posts/tags');
};
