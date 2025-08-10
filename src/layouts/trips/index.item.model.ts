'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

type Model = {
  activeRef: React.RefObject<HTMLLIElement | null>;
  handleOnInView: (isInView: boolean) => void;
  hasEnteredView: boolean;
  route: string;
};

export function useModel(isOnTrip: boolean): Model {
  const pathname = usePathname();

  const activeRef = useRef<HTMLLIElement | null>(null);

  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    if (activeRef.current && isOnTrip) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRef.current, isOnTrip]);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      setHasEnteredView(isInView);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasEnteredView],
  );

  return {
    activeRef,
    handleOnInView,
    hasEnteredView,
    route: pathname,
  };
}
