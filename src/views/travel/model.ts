'use client';

import { useEffect, useState } from 'react';

import { useTravels } from '@/hooks/useTravels';
import type { Travel } from '@/types';

type Model = {
  handleOnScrollEnd: () => void;
  shown: number;
  travel?: Travel;
};

const AMOUNT_SHOWN = 6;

export function useModel(slug: string): Model {
  const { find, travel } = useTravels();

  const [shown, setShown] = useState(AMOUNT_SHOWN);

  useEffect(() => {
    find(slug);

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnScrollEnd = () => {
    setShown((previous) => previous + AMOUNT_SHOWN);
  };

  return {
    handleOnScrollEnd,
    shown,
    travel,
  };
}
