'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

import Hooks from '@/hooks';
import type { Store } from '@/types';

type Return = {
  fetchClientSecret: () => Promise<string>;
  isEmpty: boolean;
  isReady: boolean;
  stripe: any;
};

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const useViewModel = (): Return => {
  const { fetchData } = Hooks.useApi();

  const [cart, setCart] = useState<Store.Cart.CartClient[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage: string | null = localStorage.getItem('cart');

      if (storage !== null) {
        setCart(JSON.parse(storage).map(({ hash, ...rest }) => rest));

        setIsReady(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchClientSecret = async () => {
    const response = await fetchData('store/stripe', cart);

    return response.id;
  };

  return {
    fetchClientSecret,
    isEmpty: cart.length === 0,
    isReady,
    stripe,
  };
};

export default function Node() {
  return null;
}
