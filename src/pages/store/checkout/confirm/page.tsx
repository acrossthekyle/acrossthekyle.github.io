'use client';

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { redirect } from 'next/navigation';

import Components from '@/components';
import Styles from '@/styles';

import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Store.Checkout.Confirm.Page;

function Page() {
  const { fetchClientSecret, isEmpty, isReady, stripe } = useViewModel();

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
