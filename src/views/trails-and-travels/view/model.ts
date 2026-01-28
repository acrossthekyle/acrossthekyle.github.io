'use client';

import { useState } from 'react';

import type { Data } from './types';

export function useModel(data: Data[]) {
  const [items, setItems] = useState(data);

  const handleOnFilter = (filter: string) => {
    setItems(
      filter === 'everything'
        ? data
        : [...data].filter(item => item.type === filter)
    );
  };

  return {
    handleOnFilter,
    items,
  };
};
