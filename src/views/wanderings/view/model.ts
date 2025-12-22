'use client';

import { useEffect, useRef, useState } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';
import { useWanderings } from '@/hooks/useWanderings';

import { type Data } from './types';

export function useModel(data: Data[]) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [items, setItems] = useState(data);

  const ref = useRef<HTMLAnchorElement | null>(null);

  const { isOnChild } = useHierarchy();

  const { filter, filterBy, sort, sortBy } = useWanderings();

  useEffect(() => {
    if (isOnChild) {
      setTimeout(() => {
        if (ref?.current) {
          ref?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 100);

      setTimeout(() => {
        setHasScrolled(true);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current, isOnChild]);

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

  const handleOnFilter = () => {
    filter();
  };

  const handleOnSort = () => {
    sort();
  };

  return {
    align: [...items].reduce((sum, item) => sum + item.title.length, 0) <= 10
      ? 'end'
      : 'start',
    filterBy,
    handleOnFilter,
    handleOnSort,
    isOnChild,
    items,
    ref: hasScrolled ? undefined : ref,
    sortBy,
  };
}
