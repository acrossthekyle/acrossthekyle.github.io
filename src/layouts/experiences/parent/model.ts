'use client';

import { useEffect, useRef, useState } from 'react';

import { useData } from '@/hooks/useData';
import { useHierarchy } from '@/hooks/useHierarchy';
import type { Data } from '@/types';

type Model = {
  data: Data[];
  isLoading: boolean;
  ref?: React.RefObject<HTMLAnchorElement | null>;
};

export function useModel(): Model {
  const [hasScrolled, setHasScrolled] = useState(false);

  const ref = useRef<HTMLAnchorElement | null>(null);

  const { all, isLoading, items } = useData();

  const { isOnChild } = useHierarchy();

  useEffect(() => {
    all();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOnChild) {
      setTimeout(() => {
        if (ref?.current) {
          ref?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 100);

      setTimeout(() => {
        setHasScrolled(true);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current, isOnChild]);

  return {
    data: items,
    isLoading,
    ref: hasScrolled ? undefined : ref,
  };
}
