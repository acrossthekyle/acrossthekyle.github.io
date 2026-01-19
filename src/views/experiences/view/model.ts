'use client';

import { useState } from 'react';

import type { Data } from './types';

export function useModel(data: Data[]) {
  const [items, setItems] = useState(data);

  const handleOnFilter = (filter: string, sort: string, order: string) => {
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

    if (sort === 'title') {
      if (order === 'descending') {
        result = result.sort((a, b) => b.title.join(' ').localeCompare(a.title.join(' ')));
      } else {
        result = result.sort((a, b) => a.title.join(' ').localeCompare(b.title.join(' ')));
      }
    } else {
      if (order === 'descending') {
        result = result.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      } else {
        result = result.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));
      }
    }

    setItems(result);
  };

  return {
    handleOnFilter,
    items,
  };
};
