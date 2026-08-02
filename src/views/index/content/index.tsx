'use client';

import { useState } from 'react';

import type { Collection } from '@/types';

import Filters from './filters';
import Header from './header';
import Items from './items';
import { styles } from './stylesheet';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function Content({ data }: Props) {
  const [filter, setFilter] = useState<string>('all');

  const handleOnFilter = (value: string) => {
    setFilter(value === filter ? 'all' : value);
  };

  return (
    <section className={styles.container}>
      <Header />
      <Filters filter={filter} onFilter={handleOnFilter} />
      <Items filter={filter} items={data.collections} />
    </section>
  );
}
