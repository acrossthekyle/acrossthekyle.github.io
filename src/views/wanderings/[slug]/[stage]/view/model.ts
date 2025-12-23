'use client';

import { useEffect } from 'react';

import { useMobile } from '@/hooks/useMobile';

export function useModel() {
  const { isMobile } = useMobile();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    if (!isMobile) {
      document.documentElement.classList.add('overflow-hidden');
    }

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isMobile]);
};
