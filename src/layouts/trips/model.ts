'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

type Model = {
  activeRef: React.RefObject<HTMLLIElement | null>;
  isLoading: boolean;
  isOnTrip: boolean;
  route: string;
  trips: Trip[];
};

export function useModel(): Model {
  const pathname = usePathname();

  const { fetch, isLoading, trips } = useTrips();

  const [isOnTrip, setIsOnTrip] = useState(false);

  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsOnTrip(pathname.includes('/trips/'));
  }, [pathname]);

  useEffect(() => {
    if (activeRef.current && isOnTrip) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRef.current, isOnTrip]);

  return {
    activeRef,
    isLoading,
    isOnTrip,
    route: pathname,
    trips,
  };
}
