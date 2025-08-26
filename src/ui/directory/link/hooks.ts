'use client';

import { useEffect } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

export function useScroll(
  ref?: React.RefObject<HTMLAnchorElement | null>,
): void {
  const { isOnChild } = useHierarchy();

  useEffect(() => {
    if (ref?.current && isOnChild) {
      ref?.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current, isOnChild]);
}
