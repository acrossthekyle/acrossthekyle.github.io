'use client';

import { useState } from 'react';

import { useModal } from '@/hooks/useModal';

type Model = {
  currentIndex: number;
  handleOnClose: () => void;
  handleOnChange: (index: number) => void;
  handleOnNext: () => void;
  handleOnPrevious: () => void;
};

export function useModel(total: number): Model {
  const { handleOnClose } = useModal();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleOnNext = () => {
    setCurrentIndex(
      currentIndex === total - 1 ? 0 : currentIndex + 1
    );
  };

  const handleOnPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? total - 1 : currentIndex - 1
    );
  };

  return {
    currentIndex,
    handleOnClose,
    handleOnChange,
    handleOnNext,
    handleOnPrevious,
  };
}
