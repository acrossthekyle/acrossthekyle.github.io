'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type Model = {
  activeRef: React.RefObject<HTMLLIElement | null>;
  current: string;
  isOnChild: boolean;
  previous: string;
};

export function useModel(): Model {
  const pathname = usePathname();

  const [isOnChild, setIsOnChild] = useState(false);

  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    setIsOnChild(pathname.split('').filter(character => character === '/').length === 2);
  }, [pathname]);

  useEffect(() => {
    if (activeRef.current && isOnChild) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRef.current, isOnChild]);

  return {
    activeRef,
    current: pathname,
    isOnChild,
    previous: `/${pathname.split('/')[1]}`,
  };
}
