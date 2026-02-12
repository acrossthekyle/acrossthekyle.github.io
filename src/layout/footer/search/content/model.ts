'use client';

import { useEffect, useState } from 'react';

import type { Data } from './types';

export function useModel() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);

      const response = await fetch(query.length > 0 ? `/search?query=${encodeURIComponent(query)}` : `/search`);

      const results = await response.json();

      setIsLoading(false);
      setData(results);
    };

    const debounce = setTimeout(() => {
      search();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  const handleOnChange = async (value: string) => {
    setQuery(value);

    if (value.length === 0) {
      setData([]);
    }
  };

  return {
    data,
    handleOnChange,
    isLoading,
    query,
  };
};
