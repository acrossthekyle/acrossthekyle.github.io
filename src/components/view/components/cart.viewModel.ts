'use client';

import { useEffect, useState } from 'react';

type Return = {
  count: number;
};

export const useViewModel = (): Return => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = localStorage.getItem('cart');

      const items = cart === null ? [] : JSON.parse(cart);

      setCount(items.length);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('cartUpdated', updateCount);
    }

    updateCount();

    return () => {
      window.removeEventListener('cartUpdated', updateCount);
    };
  }, []);

  return {
    count,
  };
};

export default function Node() {
  return null;
}
