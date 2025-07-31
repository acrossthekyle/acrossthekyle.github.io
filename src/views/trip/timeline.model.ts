'use client';

import { useState } from 'react';

type Model = {
  activeIndex: number | null;
  handleOnClick: (index: number) => void;
};

export function useModel(): Model {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOnClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return {
    activeIndex,
    handleOnClick,
  };
}

