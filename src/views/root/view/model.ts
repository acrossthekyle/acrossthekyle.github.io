'use client';

import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';

import { useEvent } from '@/hooks/useEvent';

import { type Data } from './types';

export function useModel(data: Data[]) {
  const [fuse, setFuse] = useState<Fuse<Data> | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [items, setItems] = useState(data);
  const [filterBy, setFilterBy] = useState('everything');
  const [orderBy, setOrderBy] = useState('descending');
  const [searchBy, setSearchBy] = useState('');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    if (fuse === null) {
      setFuse(new Fuse(data, {
        keys: ['date', 'location', 'title'],
      }));
    }
  }, [fuse, data]);

  useEffect(() => {
    let result = [...data];

    if (fuse !== null && searchBy.length > 0) {
      result = fuse.search(searchBy).map((result) => result.item);
    }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filterBy, orderBy, searchBy, sortBy]);

  const handleOnFilter = (filter: string, sort: string, order: string) => {
    setFilterBy(filter);
    setSortBy(sort);
    setOrderBy(order);
  };

  const handleOnToggle = () => {
    setIsActive(previous => !previous);
  };

  const handleOnSearch = (value: string) => {
    setSearchBy(value);
  };

  useEvent('onEscape', () => {
    if (isActive) {
      handleOnToggle();
    }
  });

  return {
    handleOnFilter,
    handleOnToggle,
    handleOnSearch,
    isActive,
    items,
    searchBy,
  };
};
