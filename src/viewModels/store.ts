'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useItemData } from '@/data/store';

type Data = {
  id: string;
  value: string;
};

function getFlattenedItems(data?: Data[]) {
  return (data || []).map(({ value }) => value);
}

export const useStoreViewModel = () => {
  const { push } = useRouter();

  const { data, hasError, isLoading, isReady } = useItemData();

  const [chosenFrame, setChosenFrame] = useState(2);
  const [chosenColor, setChosenColor] = useState(1);
  const [chosenSize, setChosenSize] = useState(3);
  const [chosenQuantity, setChosenQuantity] = useState(1);

  useEffect(() => {
    if (hasError) {
      push('/store');
    }
  }, [hasError, push]);

  const handleOnSelectFrame = (index: number) => {
    setChosenFrame(index);
    setChosenSize(0);

    if (index === 0) {
      setChosenColor(-1);
    } else if (chosenColor === -1) {
      setChosenColor(0);
    }
  };

  const handleOnSelectColor = (index: number) => {
    setChosenColor(index);
  };

  const handleOnSelectSize = (index: number) => {
    setChosenSize(index);
  };

  const handleOnSelectQuantity = (index: number) => {
    setChosenQuantity(index + 1);
  };

  const handleOnAddToCart = () => {
    if (typeof window !== 'undefined') {
      let cart = localStorage.getItem('cart');

      if (cart !== null) {
        cart = JSON.parse(cart);
      } else {
        cart = [];
      }

      const frameId = data?.styles[chosenFrame]?.id;
      const sizeId = data?.styles[chosenFrame]?.sizes[chosenSize]?.id;
      const colorId =
        chosenColor > -1
          ? data?.styles[chosenFrame]?.colors[chosenColor]?.id
          : '';

      const hash = `${data?.id}-${frameId}-${sizeId}-${colorId}`;

      const existingIndex = cart.findIndex((item) => item.hash === hash);

      if (existingIndex > -1) {
        const updatedQuantity = cart[existingIndex].quantity + chosenQuantity;

        cart[existingIndex] = {
          ...cart[existingIndex],
          quantity: updatedQuantity > 5 ? 5 : updatedQuantity,
        };
      } else {
        cart.push({
          colorId,
          frameId,
          hash,
          itemId: data?.id,
          quantity: chosenQuantity,
          sizeId,
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  return {
    color: chosenColor,
    colorOptions: getFlattenedItems(data?.styles[chosenFrame]?.colors),
    frame: chosenFrame,
    frameOptions: getFlattenedItems(data?.styles),
    handleOnAddToCart,
    handleOnSelectColor,
    handleOnSelectFrame,
    handleOnSelectQuantity,
    handleOnSelectSize,
    hasColors: data?.styles[chosenFrame]?.colors.length > 0,
    image: data?.image,
    isLoading,
    isReady,
    name: data?.title,
    price: data?.styles[chosenFrame]?.price * chosenQuantity,
    quantityOptions: [1, 2, 3, 4, 5],
    size: chosenSize,
    sizeOptions: getFlattenedItems(data?.styles[chosenFrame]?.sizes),
    sizeValue: data?.styles[chosenFrame]?.sizes[chosenSize]?.value
      .replace(' x ', 'x')
      .replace(/"/g, ''),
    snippet: data?.snippet,
  };
};
