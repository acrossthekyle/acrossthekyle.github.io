'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Hooks from '@/hooks';
import type { Store } from '@/types';

type Data = {
  id: string;
  value: string;
};

type Return = Omit<
  Store.Item.Page.Form,
  | 'onAddToCart'
  | 'onSelectColor'
  | 'onSelectFrame'
  | 'onSelectQuantity'
  | 'onSelectSize'
> & {
  handleOnAddToCart: () => void;
  handleOnSelectColor: (index: number) => void;
  handleOnSelectFrame: (index: number) => void;
  handleOnSelectQuantity: (index: number) => void;
  handleOnSelectSize: (index: number) => void;
  image: string;
  isLoading: boolean;
  isReady: boolean;
  name: string;
  price: number;
  snippet: string;
};

function getFlattenedItems(data?: Data[]): string[] {
  return (data || []).map(({ value }) => value);
}

export const useViewModel = (): Return => {
  const { asPath, push } = useRouter();

  const { data, fetchData, hasError, isLoading, isReady } = Hooks.useApi();

  const [frame, setFrame] = useState(2);
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(3);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const parts = asPath.split('/store/');

    if (parts[1] !== '[item]') {
      fetchData(`store/${parts[1]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  useEffect(() => {
    if (hasError) {
      push('/store');
    }
  }, [hasError, push]);

  const handleOnSelectFrame = (index: number) => {
    setFrame(index);
    setSize(0);

    if (index === 0) {
      setColor(-1);
    } else if (color === -1) {
      setColor(0);
    }
  };

  const handleOnSelectColor = (index: number) => {
    setColor(index);
  };

  const handleOnSelectSize = (index: number) => {
    setSize(index);
  };

  const handleOnSelectQuantity = (index: number) => {
    setQuantity(index);
  };

  const handleOnAddToCart = () => {
    if (typeof window !== 'undefined' && quantity > 0) {
      let storage: string | null = localStorage.getItem('cart');

      let cart: Store.Cart.CartClient[] = [];

      if (storage !== null) {
        cart = JSON.parse(storage);
      }

      const frameId = data?.styles[frame]?.id;
      const sizeId = data?.styles[frame]?.sizes[size]?.id;
      const colorId = color > -1 ? data?.styles[frame]?.colors[color]?.id : '';

      const hash = `${data?.id}-${frameId}-${sizeId}-${colorId}`;

      const existingIndex = cart.findIndex((item) => item.hash === hash);

      if (existingIndex > -1) {
        const updatedQuantity = cart[existingIndex].quantity + quantity;

        cart[existingIndex] = {
          ...cart[existingIndex],
          quantity: updatedQuantity > 5 ? 5 : updatedQuantity,
        };
      } else {
        cart.push({
          colorId,
          frameId,
          hash,
          itemId: data?.id || '',
          quantity,
          sizeId,
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  return {
    color,
    colorOptions: getFlattenedItems(data?.styles[frame]?.colors),
    frame,
    frameOptions: getFlattenedItems(data?.styles),
    handleOnAddToCart,
    handleOnSelectColor,
    handleOnSelectFrame,
    handleOnSelectQuantity,
    handleOnSelectSize,
    hasColors: data?.styles[frame]?.colors.length > 0,
    image: data?.image || '',
    isLoading,
    isReady,
    name: data?.title || '',
    price: (data?.styles[frame]?.price || 0) * quantity,
    quantity,
    quantityOptions: ['0', '1', '2', '3', '4', '5'],
    size,
    sizeOptions: getFlattenedItems(data?.styles[frame]?.sizes),
    snippet: data?.snippet || '',
  };
};

export default function Node() {
  return null;
}
