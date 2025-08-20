'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

type Model = {
  activeRef: React.RefObject<HTMLLIElement | null>;
  current: string;
  filter: string | null;
  isOnChild: boolean;
  previous: string;
};

export function useModel(): Model {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const activeRef = useRef<HTMLLIElement | null>(null);

  const isOnChild = pathname.split('').filter(character => character === '/').length === 2;

  useEffect(() => {
    if (activeRef.current && isOnChild) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRef.current, isOnChild]);

  const filter = searchParams.get('filter');

  return {
    activeRef,
    current: pathname,
    filter,
    isOnChild,
    previous: `/${pathname.split('/')[1]}`,
  };
}
