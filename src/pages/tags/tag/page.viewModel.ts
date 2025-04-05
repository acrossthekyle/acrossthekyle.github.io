'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Hooks from '@/hooks';
import type { Tags } from '@/types';
import Utils from '@/utils';

type Return = {
  isReady: boolean;
  items: Tags.Tag.Item[];
  tag: string;
  total: number;
};

export const useViewModel = (): Return => {
  const { query } = useRouter();

  const { data, fetchData, isReady } = Hooks.useApi();

  const [tag, setTag] = useState(null);

  useEffect(() => {
    setTag(Utils.router.getQueryItem(query, 'tag'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (tag !== null) {
      fetchData(`tags/tagged?tag=${tag}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return {
    isReady,
    items: data?.results || [],
    tag,
    total: data?.total || 0,
  };
};

export default function Node() {
  return null;
}
