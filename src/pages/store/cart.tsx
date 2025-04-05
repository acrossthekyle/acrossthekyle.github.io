'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Components from '@/components';
import { useCartData } from '@/data/store';
import Images from '@/images';
import styles from '@/styles/pages/store/cart.module.scss';

function Page() {
  const { data, getCart, isLoading, isReady } = useCartData();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('cart');

      if (result !== null) {
        setCart(JSON.parse(result));

        getCart(JSON.parse(result).map(({ hash, ...rest }) => rest));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnQuantityChange = (index: number, direction: number) => {
    if (typeof window !== 'undefined') {
      const cloned = [...cart];

      let quantity = cloned[index].quantity;

      if (direction < 0) {
        quantity = quantity === 1 ? 0 : quantity - 1;
      } else {
        quantity = quantity === 5 ? 5 : quantity + 1;
      }

      if (quantity === 0) {
        cloned.splice(index, 1);
      } else {
        cloned[index].quantity = quantity;
      }

      setCart(cloned);

      localStorage.setItem('cart', JSON.stringify(cloned));

      getCart(cloned.map(({ hash, ...rest }) => rest));

      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const handleOnRemoveItem = (index: number) => {
    if (typeof window !== 'undefined') {
      const cloned = [...cart];

      cloned.splice(index, 1);

      setCart(cloned);

      localStorage.setItem('cart', JSON.stringify(cloned));

      getCart(cloned.map(({ hash, ...rest }) => rest));

      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const handleOnRemoveAllItemsClick = () => {
    if (typeof window !== 'undefined') {
      setCart([]);

      localStorage.setItem('cart', JSON.stringify([]));

      getCart([]);

      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Store | Cart</title>
      </Head>
      <Components.Breadcrumbs
        shouldAlignCenter={false}
        items={[
          {
            text: 'Store',
            uri: '/store',
          },
          {
            text: 'Cart',
          },
        ]}
      />
      {isLoading && <Components.Loading />}
      {isReady && (
        <div className={styles.container}>
          {data.items.length === 0 ? (
            <div className={styles.empty}>
              <h2>No items in cart</h2>
              <Components.Button href="/store" text="Back to Store" />
            </div>
          ) : (
            <>
              <section className={styles.header}>
                <h1>Total</h1>
                <p>${data.total}</p>
                <Components.Button href="/store/checkout" text="Checkout" />
              </section>
              {data.items.map((item, index) => (
                <section className={styles.section} key={index}>
                  <div className={styles.info}>
                    <div className={styles.image}>
                      <button
                        className={styles.remove}
                        onClick={() => handleOnRemoveItem(index)}
                        title="Remove item"
                        type="button"
                      >
                        <Images.Icons.Close />
                      </button>
                      <Link href={item.uri}>
                        <Components.Image
                          alt={item.name}
                          height={432}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          src={item.image}
                          width={768}
                        />
                      </Link>
                    </div>
                    <div className={styles.description}>
                      <div className={styles.name}>
                        <h2>
                          <Link href={item.uri}>{item.name}</Link>
                        </h2>
                        <p className={styles.price}>
                          {item.quantity > 1 && (
                            <>
                              ${item.total} ({item.price} x {item.quantity})
                            </>
                          )}
                          {item.quantity === 1 && <>${item.price}</>}
                        </p>
                      </div>
                      <div className={styles.attributes}>
                        <ul>
                          <li>Size: {item.size}</li>
                          <li>Frame: {item.frame}</li>
                          {item.color !== null && <li>Color: {item.color}</li>}
                          {item.mat !== null && <li>Mat: {item.mat}</li>}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <Components.Button
                      mode="secondary"
                      onClick={() => handleOnQuantityChange(index, -1)}
                      text="-"
                      title="Decrease quantity"
                    />
                    <span>{item.quantity}</span>
                    <Components.Button
                      mode="secondary"
                      onClick={() => handleOnQuantityChange(index, 1)}
                      text="+"
                      title="Increase quantity"
                    />
                  </div>
                </section>
              ))}
            </>
          )}
        </div>
      )}
    </Components.View>
  );
}

export default Page;
