'use client';

import { useFetch } from './abstract';

export const useItemsByTagData = () => {
  const { fetchData, ...rest } = useFetch();

  const getByTag = (tag: string) => {
    fetchData(`/api/tags/tagged?tag=${tag}`);
  };

  return {
    ...rest,
    getByTag,
  };
};
