'use client';

import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import Hooks from '@/hooks';
import type { Search } from '@/types';

type Return = {
  handleOnSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isReady: boolean;
  items: Search.Item[];
  query: string;
  total: number;
};

export const useViewModel = (): Return => {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  const [query, updateQuery] = useState('');

  useEffect(() => {
    if (!!query) {
      search(`search?query=${query}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(debounce(fetchData, 300), []);

  const handleOnSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      updateQuery((event.target as HTMLInputElement).value.toLowerCase());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query],
  );

  return {
    handleOnSearch,
    isLoading,
    isReady: isReady && !!query,
    items: data?.results || [],
    query,
    total: data?.total || 0,
  };
};

export default function Node() {
  return null;
}
