'use client';

import { useState } from 'react';

type Model = {
  handleOnToggle: () => void;
  isOpen: boolean;
};

export const useModel = (): Model => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    handleOnToggle,
    isOpen,
  };
};
