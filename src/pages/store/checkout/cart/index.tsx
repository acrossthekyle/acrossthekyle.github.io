'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Components from '@/components';
import Hooks from '@/hooks';
import Images from '@/images';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Pages.Store.Checkout.Cart.Page;

function Page() {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  const [cart, setCart] = useState<Store.Cart.CartClient[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage: string | null = localStorage.getItem('cart');

      if (storage !== null) {
        const parsed: Store.Cart.CartClient[] = JSON.parse(storage);

        setCart(parsed);

        fetchData(
          'store/cart',
          parsed.map(({ hash, ...rest }) => rest),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCart = (data: Store.Cart.CartClient[]) => {
    setCart(data);

    localStorage.setItem('cart', JSON.stringify(data));

    fetchData(
      'store/cart',
      data.map(({ hash, ...rest }) => rest),
    );

    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleOnQuantityChange = (index: number, direction: number) => {
    if (typeof window !== 'undefined') {
      const cloned: Store.Cart.CartClient[] = [...cart];

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

      updateCart(cloned);
    }
  };

  const handleOnRemoveItem = (index: number) => {
    if (typeof window !== 'undefined') {
      const cloned: Store.Cart.CartClient[] = [...cart];

      cloned.splice(index, 1);

      updateCart(cloned);
    }
  };

  const isEmpty = (data?.items || []).length === 0;
  const canRender = (data?.items || []).length === 0 ? true : isReady;
  const items = data?.items || [];
  const total = data?.total || 0;

  return (
    <Components.View title="Store | Cart">
      {isLoading && <Components.Loading />}
      {canRender && (
        <div className={scss.container}>
          {isEmpty ? (
            <div className={scss.empty}>
              <h2>No items in cart</h2>
              <Components.Button href="/store" text="Back to Store" />
            </div>
          ) : (
            <>
              <div className={scss.header}>
                <h1>Cart</h1>
                <p>${total}</p>
                <Components.Button
                  href="/store/checkout/confirm"
                  text="Checkout"
                />
              </div>
              <div id="items">
                {items.map((item, index) => (
                  <section className={scss.section} key={index}>
                    <div className={scss.info}>
                      <div className={scss.image}>
                        <button
                          className={scss.remove}
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
                      <div className={scss.description}>
                        <div>
                          <h2>
                            <Link href={item.uri}>{item.name}</Link>
                          </h2>
                          <p className={scss.price}>
                            {item.quantity > 1 && (
                              <>
                                ${item.total} ({item.price} x {item.quantity})
                              </>
                            )}
                            {item.quantity === 1 && <>${item.price}</>}
                          </p>
                        </div>
                        <div className={scss.attributes}>
                          <ul>
                            <li>Size: {item.size}</li>
                            <li>Frame: {item.frame}</li>
                            {item.color !== null && (
                              <li>Color: {item.color}</li>
                            )}
                            {item.mat !== null && <li>Mat: {item.mat}</li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={scss.quantity}>
                      <Components.Button
                        mode="secondary"
                        onClick={() => handleOnQuantityChange(index, -1)}
                        text="-"
                        title="Decrease quantity"
                      />
                      <span title={`Quantity of ${item.quantity}`}>
                        {item.quantity}
                      </span>
                      <Components.Button
                        mode="secondary"
                        onClick={() => handleOnQuantityChange(index, 1)}
                        text="+"
                        title="Increase quantity"
                      />
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </Components.View>
  );
}

export default Page;
