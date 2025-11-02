'use client';

import { useEffect } from 'react';

export function useModel() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
};
