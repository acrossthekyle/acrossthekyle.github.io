'use client';

import { useEffect, useState } from 'react';

import { type Data } from './types';

export function useModel(data: Data[]) {
  const [items, setItems] = useState(data);
  const [filterBy, setFilterBy] = useState<string | undefined>(undefined);
  const [orderBy, setOrderBy] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);

  const handleOnFilter = (filter?: string, sort?: string, order?: string) => {
    setFilterBy(filter ?? undefined);
    setSortBy(sort ?? undefined);
    setOrderBy(order ?? undefined);
  };

  useEffect(() => {
    let result = [...data];

    if (filterBy === 'vacation') {
      result = result.filter(item => item.type === 'vacation');
    } else if (filterBy === 'overnight trek') {
      result = result.filter(item => item.type === 'overnight trek');
    } else if (filterBy === 'peak-bagging') {
      result = result.filter(item => item.type === 'peak-bagging');
    } else if (filterBy === 'section hike') {
      result = result.filter(item => item.type === 'section hike');
    } else if (filterBy === 'thru-hike') {
      result = result.filter(item => item.type === 'thru-hike');
    }

    if (sortBy === 'title') {
      if (orderBy === 'descending') {
        result = result.sort((a, b) => b.title.join(' ').localeCompare(a.title.join(' ')));
      } else {
        result = result.sort((a, b) => a.title.join(' ').localeCompare(b.title.join(' ')));
      }
    } else {
      if (orderBy === 'descending') {
        result = result.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      } else {
        result = result.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));
      }
    }

    setItems(result);
  }, [data, filterBy, orderBy, sortBy]);

  return {
    handleOnFilter,
    items,
  };
};
