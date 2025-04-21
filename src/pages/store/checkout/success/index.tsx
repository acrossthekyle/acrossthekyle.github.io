'use client';

import { useEffect } from 'react';

import Components from '@/components';
import Hooks from '@/hooks';
import Styles from '@/styles';

const scss = Styles.Pages.Store.Checkout.Success.Page;

function Page() {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');

      const params = new URLSearchParams(new URL(window.location.href).search);

      fetchData(`store/confirmation?session_id=${params.get('session_id')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Components.View title="Shop | Checkout Confirmation">
      {isLoading && <Components.Loading />}
      {isReady && (
        <>
          <h1 className={scss.heading}>Thank you!</h1>
          <p className={scss.paragraph}>
            Thanks for your order {data?.name || ''}, a receipt should be on its
            way to {data?.email || ''}.
          </p>
          <p className={scss.paragraph}>
            If the receipt does not arrive, or if you have any questions, please
            reach out to{' '}
            <a href="mailto:hello@acrossthekyle.com">
              hello@acrossthekyle.com.
            </a>
          </p>
        </>
      )}
    </Components.View>
  );
}

export default Page;
