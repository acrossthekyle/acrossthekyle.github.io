'use client';

import { useState } from 'react';

import type { Collection, Image } from '@/types';

import Back from './back';
import Carousel from './carousel';
import Footer from './footer';
import { styles } from './stylesheet';

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

  return (
    <div className={styles.container}>
      <Back title={data.collection.title.join(' ')} />
      <Carousel images={data.all} />
      <Footer
        all={data.all}
        current={current}
        id={data.collection.id}
        onNavigate={setCurrent}
        total={data.total}
      />
    </div>
  );
}
