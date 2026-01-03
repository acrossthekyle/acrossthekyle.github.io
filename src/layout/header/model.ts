'use client';

import { useState } from 'react';

export function useModel() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleOnToggle = () => {
    setIsExpanded(previous => !previous);
  };

  return {
    handleOnToggle,
    isExpanded,
  };
};
