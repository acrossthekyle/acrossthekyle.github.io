'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getPostIdAndStageFromUriSegment } from '@/utils/http';

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

export const usePostData = () => {
  const { route } = useRouter();

  const { fetchData, ...rest } = useFetch();

  useEffect(() => {
    const { id, stageIndex } = getPostIdAndStageFromUriSegment(
      route.split('/posts/'),
    );

    fetchData(`/api/posts/${id}?stageIndex=${stageIndex}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return rest;
};

export const usePostStagesData = () => {
  const { route } = useRouter();

  const { fetchData, ...rest } = useFetch();

  useEffect(() => {
    const { id } = getPostIdAndStageFromUriSegment(route.split('/posts/'));

    fetchData(`/api/posts/${id}/stages`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return rest;
};

export const usePostsForMapData = () => {
  return useFetch('/api/posts/map');
};

export const useSearchPostsData = () => {
  const { fetchData, ...rest } = useFetch();

  const search = (query: string) => {
    fetchData(`/api/posts/search?query=${query}`);
  };

  return {
    ...rest,
    search,
  };
};
