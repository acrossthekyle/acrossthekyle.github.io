'use client';

import { useFetch } from './abstract';

export const usePrintsData = () => {
  return useFetch('/api/prints');
};
