'use client';

import { useState } from 'react';

type Model = {
  activeIndex: number;
  handleOnCategory: (index: number) => void;
  isOnCategory: boolean;
};

export function useModel(): Model {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleOnCategory = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return {
    activeIndex,
    handleOnCategory,
    isOnCategory: activeIndex !== -1,
  };
}
