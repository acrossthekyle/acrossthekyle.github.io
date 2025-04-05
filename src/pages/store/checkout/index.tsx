'use client';

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import Components from '@/components';
import styles from '@/styles/pages/store/checkout/index.module.scss';

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Page() {
  const [cart, setCart] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem('cart');

      if (storage !== null) {
        setCart(JSON.parse(storage).map(({ hash, ...rest }) => rest));
        setIsReady(true);
      }
    }
  }, []);

  const fetchClientSecret = async () => {
    const response = await fetch('/api/store/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    });

    const data = await response.json();

    return data.id;
  };

  if (!isReady) {
    return null;
  }

  if (cart.length === 0) {
    return redirect('/store');
  }

  return (
    <Components.View>
      <Head>
        <title>Kyle &mdash; Shop | Checkout</title>
      </Head>
      <Components.Breadcrumbs
        shouldAlignCenter={false}
        items={[
          {
            text: 'Store',
            uri: '/store',
          },
          {
            text: 'Checkout',
          },
        ]}
      />
      <div className={styles.checkout} id="checkout">
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
