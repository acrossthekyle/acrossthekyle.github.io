'use client';

import { useState } from 'react';

import type { Collection, Image } from '@/types';

import Back from './back';
import Carousel from './carousel';
import Footer from './footer';
import { useNavigation } from './hooks';
import styles from './stylesheet';

type Props = {
  data: {
    all: Image[];
    collection: Collection;
    image: Image;
    index: number;
    total: number;
  };
};

export default function View({ data }: Props) {
  const [current, setCurrent] = useState(data.index);

  const { onNavigate } = useNavigation({
    all: data.all,
    current,
    id: data.collection.id,
    total: data.total,
  });

  const handleOnNavigate = (index: number) => {
    setCurrent(index);

    onNavigate(data.all[index]?.id || '', true);
  };

  return (
    <div className={styles.container}>
      <Back />
      <Carousel
        collection={data.collection}
        images={data.all}
        onNavigate={handleOnNavigate}
      />
      <Footer
        all={data.all}
        current={current}
        id={data.collection.id}
        total={data.total}
      />
    </div>
  );
}
