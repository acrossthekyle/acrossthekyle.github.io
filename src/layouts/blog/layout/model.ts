'use client';

import { useEffect, useRef, useState } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

type Model = {
  ref?: React.RefObject<HTMLAnchorElement | null>;
};

export function useModel(): Model {
  const [hasScrolled, setHasScrolled] = useState(false);

  const ref = useRef<HTMLAnchorElement | null>(null);

  const { isOnChild } = useHierarchy();

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
    ref: hasScrolled ? undefined : ref,
  };
}
