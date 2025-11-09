'use client';

import { useState, useEffect } from 'react';

const DEFAULT_MOBILE_BREAKPOINT = 768;

export const useModel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleOnResize = () => {
      setIsMobile(window.innerWidth < DEFAULT_MOBILE_BREAKPOINT);
    };

    handleOnResize();

    window.addEventListener('resize', handleOnResize);

    return () => window.removeEventListener('resize', handleOnResize);
  }, []);

  return {
    isMobile,
  };
};
