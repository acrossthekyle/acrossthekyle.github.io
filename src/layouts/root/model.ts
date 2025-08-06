'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Model = {
  handleOnFullscreen: () => void;
  isFullscreen: boolean;
  isOnRoot: boolean;
  isOnTrip: boolean;
  route: string;
};

export function useModel(): Model {
  const pathname = usePathname();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOnRoot, setIsOnRoot] = useState(false);
  const [isOnTrip, setIsOnTrip] = useState(false);

  useEffect(() => {
    setIsOnRoot(pathname === '/');
    setIsOnTrip(pathname.includes('/trips/'));
  }, [pathname]);

  useEffect(() => {
    const handleOnChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      } else {
        setIsFullscreen(true);
      }
    };

    document.addEventListener('fullscreenchange', handleOnChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleOnChange);
    };
  }, []);

  const handleOnFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
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
