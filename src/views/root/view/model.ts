'use client';

import { useEffect, useState } from 'react';

import { type Data } from './types';

export function useModel(data: Data[]) {
  const [items, setItems] = useState(data);
  const [filterBy, setFilterBy] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);

  const handleOnFilter = (filter?: string, sort?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setFilterBy(filter ?? undefined);
    setSortBy(sort ?? undefined);
  };

  useEffect(() => {
    let result = [...data];

    if (filterBy === '2010s') {
      result = result.filter(item => item.date.includes('201'));
    } else if (filterBy === '2020s') {
      result = result.filter(item => item.date.includes('202'));
    } else if (filterBy === 'destinations') {
      result = result.filter(item => item.type === 'vacation');
    } else if (filterBy === 'overnight hikes') {
      result = result.filter(item => item.type === 'overnight trek');
    } else if (filterBy === 'peak bagging') {
      result = result.filter(item => item.type === 'peak-bagging');
    } else if (filterBy === 'section hikes') {
      result = result.filter(item => item.type === 'section hike');
    } else if (filterBy === 'thru-hikes') {
      result = result.filter(item => item.type === 'thru-hike');
    }

    if (sortBy === 'title') {
      result = result.sort((a, b) => a.title.join(' ').localeCompare(b.title.join(' ')));
    }

    setItems(result);
  }, [data, filterBy, sortBy]);

  return {
    handleOnFilter,
    items,
  };
};
