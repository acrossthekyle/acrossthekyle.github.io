'use client';

import { useFetch } from './abstract';

export const usePacksData = () => {
  const { fetchData, ...rest } = useFetch();

  const getPacks = (units?: string) => {
    fetchData(`/api/packs?units=${units || 'imperial'}`);
  };

  return {
    ...rest,
    getPacks,
  };
};
