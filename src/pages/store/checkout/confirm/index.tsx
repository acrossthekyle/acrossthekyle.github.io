'use client';

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Components from '@/components';
import Hooks from '@/hooks';
import { useCartItems } from '@/store/cart';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Pages.Store.Checkout.Confirm.Page;

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Page() {
  const { push } = useRouter();

  const { fetchData } = Hooks.useApi();

  const items = useCartItems();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        document.querySelector('html').setAttribute('data-theme', 'light');
      }, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (items.length === 0) {
      push('/store');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const fetchClientSecret = async () => {
    const response = await fetchData('store/confirm', items);

    return response.id;
  };

  return (
    <Components.View
      metadata={{
        title: `Store | Checkout`,
        description: '',
        url: '/store/checkout/confirm',
      }}
    >
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
