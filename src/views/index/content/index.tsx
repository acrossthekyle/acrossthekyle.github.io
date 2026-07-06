'use client';

import { useState } from 'react';

import type { Collection, Cover } from '@/types';

import Filters from './filters';
import Header from './header';
import Image from './image';
import Items from './items';
import { styles } from './stylesheet';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function Content({ data }: Props) {
  const [cover, setCover] = useState<Cover | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const handleOnFilter = (value: string) => {
    setFilter(value === filter ? 'all' : value);
  };

  const handleOnHover = (cover: Cover | null) => {
    setCover(cover);
  };

  return (
    <section className={styles.container}>
      <Header />
      <Filters filter={filter} onFilter={handleOnFilter} />
      <Image cover={cover} />
      <Items filter={filter} items={data.collections} onHover={handleOnHover} />
    </section>
  );
}
