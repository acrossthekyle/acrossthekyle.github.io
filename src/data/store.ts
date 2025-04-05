'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useFetch } from './abstract';

export const useItemsData = () => {
  return useFetch('/api/store');
};

export const useItemData = () => {
  const { asPath } = useRouter();

  const { fetchData, ...rest } = useFetch();

  useEffect(() => {
    const parts = asPath.split('/store/');

    if (parts[1] !== '[slug]') {
      fetchData(`/api/store/${parts[1]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return rest;
};

export const useCartData = () => {
  const { fetchData, ...rest } = useFetch();

  const getCart = (body: object) => {
    fetchData('/api/store/cart', body);
  };

  return {
    ...rest,
    getCart,
  };
};
