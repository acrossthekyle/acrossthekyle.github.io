'use client';

import { useState } from 'react';

import type { Data } from './types';

export function useModel(data: Data[]) {
  const [items, setItems] = useState(data);

  const handleOnFilter = (filter: string) => {
    let result = [...data];

    if (filter === 'vacation') {
      result = result.filter(item => item.type === 'vacation');
    } else if (filter === 'overnight trek') {
      result = result.filter(item => item.type === 'overnight trek');
    } else if (filter === 'peak-bagging') {
      result = result.filter(item => item.type === 'peak-bagging');
    } else if (filter === 'section hike') {
      result = result.filter(item => item.type === 'section hike');
    } else if (filter === 'thru-hike') {
      result = result.filter(item => item.type === 'thru-hike');
    }

    setItems(result);
  };

  return {
    handleOnFilter,
    items,
  };
};
