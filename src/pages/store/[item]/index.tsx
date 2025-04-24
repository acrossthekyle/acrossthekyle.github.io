'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { store } from '@/cache/store';
import Components from '@/components';
import { useCartActions } from '@/store/cart';
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

  const { add } = useCartActions();

  const [data, setData] = useState<Store.Item | undefined>();
  const [frame, setFrame] = useState(2);
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(3);

  useEffect(() => {
    const result = store.find(({ uri }) =>
      uri.includes(String(query.item).toLowerCase()),
    );

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

  const handleOnAddToCart = () => {
    add(data?.id, data?.styles, frame, color, size, 1);

    push('/store/checkout/cart');
  };

  const hasColors = data?.styles[frame]?.colors.length > 0;
  const name = data?.title || '';
  const price = data?.styles[frame]?.price || '0';
  const snippet = data?.snippet || '';

  return (
    <Components.View
      metadata={{
        title: `Store | ${name}`,
        description: snippet,
        url: data?.uri,
      }}
    >
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
            onSelectSize={handleOnSelectSize}
            hasColors={hasColors}
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
