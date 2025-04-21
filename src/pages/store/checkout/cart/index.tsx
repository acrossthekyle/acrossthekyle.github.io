'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Components from '@/components';
import Images from '@/images';
import { useCartActions } from '@/store/cart';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Pages.Store.Checkout.Cart.Page;

function Page() {
  const { adjust, retrieve, remove } = useCartActions();

  const [cart, setCart] = useState<Store.Cart[]>([]);

  useEffect(() => {
    setCart(retrieve());
  }, [retrieve]);

  const handleOnQuantityChange = (index: number, direction: number) => {
    adjust(index, direction);

    setCart(retrieve());
  };

  const handleOnRemoveItem = (index: number) => {
    remove(index);

    setCart(retrieve());
  };

  if (cart === undefined) {
    return null;
  }

  const total = cart
    .reduce((sum, { total }) => sum + Number(total), 0)
    .toFixed(2);

  return (
    <Components.View title="Store | Cart">
      <div className={scss.container}>
        {cart.length === 0 ? (
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
              {cart.map((item: Store.Cart, index: number) => (
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
                          {item.color !== null && <li>Color: {item.color}</li>}
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
    </Components.View>
  );
}

export default Page;
