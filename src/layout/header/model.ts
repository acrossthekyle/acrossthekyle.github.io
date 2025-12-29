'use client';

import { useEffect, useState } from 'react';

export function useModel() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [isExpanded]);

  const handleOnToggle = () => {
    setIsExpanded(previous => !previous);
  };

  return {
    handleOnToggle,
    isExpanded,
  };
};
