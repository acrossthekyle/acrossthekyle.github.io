'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Images from '@/images';
import styles from '@/styles/components/view/components/cart.module.scss';

function Cart() {
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

  return (
    <Link className={styles.link} href="/store/checkout/cart">
      <Images.Icons.Cart />
      {count > 0 && <span className={styles.count} />}
    </Link>
  );
}

export default Cart;
