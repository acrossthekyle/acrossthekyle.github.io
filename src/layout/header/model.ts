'use client';

import { useEffect, useState } from 'react';

export function useModel() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuActive ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuActive]);

  const handleOnToggle = () => {
    setIsMenuActive((previous) => !previous);
  };

  const handleOnClick = () => {
    setIsMenuActive(false);
  };

  return {
    handleOnClick,
    handleOnToggle,
    isMenuActive,
  };
}
