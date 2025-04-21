'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { store } from '@/cache/store';
import Components from '@/components';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Pages.Store.Item.Page;

type Data = {
  id: string;
  value: string;
};

function getFlattenedItems(data?: Data[]): string[] {
  return (data || []).map(({ value }) => value);
}

function Page() {
  const { push, query } = useRouter();

  const [data, setData] = useState<Store.Item.Api.Item | undefined>();
  const [frame, setFrame] = useState(2);
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(3);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const result =
      store.find(({ uri }) => uri.includes(String(query.item).toLowerCase())) ??
      undefined;

    setData(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleOnSelectFrame = (index: number) => {
    setFrame(index);
    setSize(0);

    if (index === 0) {
      setColor(-1);
    } else if (color === -1) {
      setColor(0);
    }
  };

  const handleOnSelectColor = (index: number) => {
    setColor(index);
  };

  const handleOnSelectSize = (index: number) => {
    setSize(index);
  };

  const handleOnSelectQuantity = (index: number) => {
    setQuantity(index);
  };

  const handleOnAddToCart = () => {
    if (typeof window !== 'undefined' && quantity > 0) {
      let storage: string | null = localStorage.getItem('cart');

      let cart: Store.Cart.CartClient[] = [];

      if (storage !== null) {
        cart = JSON.parse(storage);
      }

      const frameId = data?.styles[frame]?.id;
      const sizeId = data?.styles[frame]?.sizes[size]?.id;
      const colorId = color > -1 ? data?.styles[frame]?.colors[color]?.id : '';

      const hash = `${data?.id}-${frameId}-${sizeId}-${colorId}`;

      const existingIndex = cart.findIndex((item) => item.hash === hash);

      if (existingIndex > -1) {
        const updatedQuantity = cart[existingIndex].quantity + quantity;

        cart[existingIndex] = {
          ...cart[existingIndex],
          quantity: updatedQuantity > 5 ? 5 : updatedQuantity,
        };
      } else {
        cart.push({
          colorId,
          frameId,
          hash,
          itemId: data?.id || '',
          quantity,
          sizeId,
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      window.dispatchEvent(new Event('cartUpdated'));

      push('/store/checkout/cart');
    }
  };

  const hasColors = data?.styles[frame]?.colors.length > 0;
  const name = data?.title || '';
  // @ts-expect-error
  const price = (data?.styles[frame]?.price || 0) * quantity;
  const snippet = data?.snippet || '';

  return (
    <Components.View title={`Store | ${name}`}>
      <div className={scss.wrapper}>
        <Components.Store.Item.Aside
          color={color}
          frame={frame}
          image={data?.image || ''}
          name={name}
        />
        <div className={scss.content}>
          <Components.Breadcrumbs
            shouldAlignCenter={false}
            items={[
              {
                text: 'Store',
                uri: '/store',
              },
              {
                text: name,
              },
            ]}
          />
          <Components.Store.Item.Info
            name={name}
            price={price}
            snippet={snippet}
          />
          <Components.Store.Item.Form
            color={color}
            colorOptions={getFlattenedItems(data?.styles[frame]?.colors)}
            frame={frame}
            frameOptions={getFlattenedItems(data?.styles)}
            onAddToCart={handleOnAddToCart}
            onSelectColor={handleOnSelectColor}
            onSelectFrame={handleOnSelectFrame}
            onSelectQuantity={handleOnSelectQuantity}
            onSelectSize={handleOnSelectSize}
            hasColors={hasColors}
            quantity={quantity}
            quantityOptions={['0', '1', '2', '3', '4', '5']}
            size={size}
            sizeOptions={getFlattenedItems(data?.styles[frame]?.sizes)}
          />
          <Components.Store.Item.Descriptions frame={frame} />
          <Components.Store.Policies />
        </div>
      </div>
    </Components.View>
  );
}

export default Page;
