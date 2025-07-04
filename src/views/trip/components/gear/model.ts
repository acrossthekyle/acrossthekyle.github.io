'use client';

import { useState } from 'react';

type Model = {
  handleOnSelect: (index: number | null) => void;
  index: number | null;
};

export const useModel = (): Model => {
  const [index, setIndex] = useState<number | null>(null);

  const handleOnSelect = (index: number | null) => {
    setIndex(index);
  }

  return {
    handleOnSelect,
    index,
  };
};
