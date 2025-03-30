'use client';

import { useFetch } from './abstract';

export const usePacksData = () => {
  return useFetch('/api/packs');
};
