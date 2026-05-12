'use client';

import { useState, useEffect } from 'react';

export function useWindow() {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
  };
};
