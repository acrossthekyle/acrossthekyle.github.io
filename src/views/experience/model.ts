'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useData } from '@/hooks/useData';
import type { Data } from '@/types';

type Model = {
  data?: Data;
  handleOnScrollEnd: () => void;
  shown: number;
};

const AMOUNT_SHOWN = 6;

export function useModel(slug: string): Model {
  const { find, isMissing, item } = useData();

  const [shown, setShown] = useState(AMOUNT_SHOWN);

  useEffect(() => {
    find(slug);

    // if #XX exists in url, set shown value to minimum
    // value required to show #XX ID on screen

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMissing) {
      notFound();
    }
  }, [isMissing]);

  const handleOnScrollEnd = () => {
    setShown((previous) => previous + AMOUNT_SHOWN);
  };

  return {
    data: item,
    handleOnScrollEnd,
    shown,
  };
}
