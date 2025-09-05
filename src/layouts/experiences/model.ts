'use client';

import { useEffect, useRef } from 'react';

import { useData } from '@/hooks/useData';

type Data = {
  path: string;
  text: string[];
};

type Model = {
  isLoading: boolean;
  ref: React.RefObject<HTMLAnchorElement | null>;
  data: Data[];
};

export function useModel(): Model {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const { all, isLoading, items } = useData();

  useEffect(() => {
    all();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    ref,
    data: items.map((item) => ({
      path: `/experiences/${item.slug}`,
      text: item.title,
    })),
  };
}
