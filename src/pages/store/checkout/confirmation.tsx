import Head from 'next/head';
import { useEffect, useState } from 'react';

import Components from '@/components';
import styles from '@/styles/pages/store/checkout/confirmation.module.scss';

function Page() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    async function fetchData() {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');

        const params = new URLSearchParams(
          new URL(window.location.href).search,
        );

        const response = await fetch(
          `/api/store/confirmation?session_id=${params.get('session_id')}`,
        );

        const { email, name } = await response.json();

        setEmail(email);
        setName(name);
      }
    }

    fetchData();
  }, []);

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Shop | Checkout Confirmation</title>
      </Head>
      <h1>Thank you!</h1>
      <p>
        Thanks for your order {name}, a receipt should be on its way to {email}.
      </p>
      <p>
        If the receipt does not arrive, or if you have any questions, please
        reach out to{' '}
        <a href="mailto:hello@acrossthekyle.com">hello@acrossthekyle.com.</a>
      </p>
    </Components.View>
  );
}

export default Page;
