'use client';

import { useCallback, useState } from 'react';

type Return = {
  handleOnViewMore: () => void;
  shown: number;
};

const PAGE_SIZE = 9;

export const useViewModel = (): Return => {
  const [shown, setShown] = useState(PAGE_SIZE);

  const handleOnViewMore = useCallback(() => {
    setShown(shown + PAGE_SIZE);
  }, [shown]);

  return {
    handleOnViewMore,
    shown,
  };
};

export default function Node() {
  return null;
}
