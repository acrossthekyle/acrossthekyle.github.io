'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useFullscreen } from '@/hooks/useFullscreen';

type Model = {
  handleOnFullscreen: () => void;
  isFullscreen: boolean;
  isOnRoot: boolean;
  isOnTrip: boolean;
  route: string;
};

export function useModel(): Model {
  const pathname = usePathname();

  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  const [isOnRoot, setIsOnRoot] = useState(false);
  const [isOnTrip, setIsOnTrip] = useState(false);

  useEffect(() => {
    setIsOnRoot(pathname === '/');
    setIsOnTrip(pathname.includes('/trips/'));
  }, [pathname]);

  const handleOnFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return {
    handleOnFullscreen,
    isFullscreen,
    isOnRoot,
    isOnTrip,
    route: pathname,
  };
}
