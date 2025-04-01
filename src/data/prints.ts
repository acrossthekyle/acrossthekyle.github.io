'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useFetch } from './abstract';

export const usePrintsData = () => {
  return useFetch('/api/prints');
};

export const usePrintData = () => {
  const { asPath } = useRouter();

  const { fetchData, ...rest } = useFetch();

  useEffect(() => {
    const parts = asPath.split('/shop/');

    if (parts[1] !== '[slug]') {
      fetchData(`/api/prints/${parts[1]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return rest;
};
