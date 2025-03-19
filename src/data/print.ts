'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useFetch } from './abstract';

export const usePrintData = () => {
  const { asPath } = useRouter();

  const { fetchData, ...rest } = useFetch();

  useEffect(() => {
    const parts = asPath.split('/prints/');

    if (parts[1] !== '[slug]') {
      fetchData(`/api/prints/${parts[1]}`);
    }
  }, [asPath, fetchData]);

  return rest;
};
