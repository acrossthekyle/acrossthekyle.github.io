'use client';

import { useState } from 'react';

type Model = {
  activeIndex: number;
  handleOnBack: () => void;
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

  const handleOnBack = () => {
    setActiveIndex(-1);
  };

  return {
    activeIndex,
    handleOnBack,
    handleOnCategory,
    isOnCategory: activeIndex !== -1,
  };
}
