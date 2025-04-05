'use client';

import { useEffect, useState } from 'react';

import Hooks from '@/hooks';
import type { Store } from '@/types';

type Return = {
  handleOnQuantityChange: (index: number, direction: number) => void;
  handleOnRemoveItem: (index: number) => void;
  isEmpty: boolean;
  isLoading: boolean;
  isReady: boolean;
  items: Store.Cart.CartServer[];
  total: number;
};

export const useViewModel = (): Return => {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  const [cart, setCart] = useState<Store.Cart.CartClient[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage: string | null = localStorage.getItem('cart');

      if (storage !== null) {
        const parsed: Store.Cart.CartClient[] = JSON.parse(storage);

        setCart(parsed);

        fetchData(
          'store/cart',
          parsed.map(({ hash, ...rest }) => rest),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCart = (data: Store.Cart.CartClient[]) => {
    setCart(data);

    localStorage.setItem('cart', JSON.stringify(data));

    fetchData(
      'store/cart',
      data.map(({ hash, ...rest }) => rest),
    );

    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleOnQuantityChange = (index: number, direction: number) => {
    if (typeof window !== 'undefined') {
      const cloned: Store.Cart.CartClient[] = [...cart];

      let quantity = cloned[index].quantity;

      if (direction < 0) {
        quantity = quantity === 1 ? 0 : quantity - 1;
      } else {
        quantity = quantity === 5 ? 5 : quantity + 1;
      }

      if (quantity === 0) {
        cloned.splice(index, 1);
      } else {
        cloned[index].quantity = quantity;
      }

      updateCart(cloned);
    }
  };

  const handleOnRemoveItem = (index: number) => {
    if (typeof window !== 'undefined') {
      const cloned: Store.Cart.CartClient[] = [...cart];

      cloned.splice(index, 1);

      updateCart(cloned);
    }
  };

  return {
    handleOnQuantityChange,
    handleOnRemoveItem,
    isEmpty: (data?.items || []).length === 0,
    isLoading,
    isReady: (data?.items || []).length === 0 ? true : isReady,
    items: data?.items || [],
    total: data?.total || 0,
  };
};

export default function Node() {
  return null;
}
