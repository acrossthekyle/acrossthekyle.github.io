'use client';

import { notFound } from 'next/navigation';
import { useEffect } from 'react';

import { useData } from '@/hooks/useData';
import { useHierarchy } from '@/hooks/useHierarchy';
import type { Data } from '@/types';

type Model = {
  data?: Data;
  isOnGrandChild: boolean;
};

export function useModel(slug: string): Model {
  const { find, isMissing, item } = useData();

  const { isOnGrandChild } = useHierarchy();

  useEffect(() => {
    find(slug);

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMissing) {
      notFound();
    }
  }, [isMissing]);

  return {
    data: item,
    isOnGrandChild,
  };
}
