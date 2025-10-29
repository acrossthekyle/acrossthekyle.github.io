'use client';

import { useEffect } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

type Model = {
  isOnGrandChild: boolean;
};

export function useModel(): Model {
  const { isOnGrandChild } = useHierarchy();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    isOnGrandChild,
  };
}
