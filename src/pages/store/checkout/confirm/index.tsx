'use client';

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import Components from '@/components';
import Hooks from '@/hooks';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Pages.Store.Checkout.Confirm.Page;

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Page() {
  const { fetchData } = Hooks.useApi();

  const [cart, setCart] = useState<Store.Cart.CartClient[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        document.querySelector('html').setAttribute('data-theme', 'light');
      }, 10);

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

  const isEmpty = cart.length === 0;

  if (!isReady) {
    return null;
  }

  if (isEmpty) {
    return redirect('/store');
  }

  return (
    <Components.View title="Shop | Checkout">
      <h1 className={scss.header}>Checkout</h1>
      <div className={scss.checkout} id="checkout">
        <EmbeddedCheckoutProvider
          stripe={stripe}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </Components.View>
  );
}

export default Page;
