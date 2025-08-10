'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useFullscreen } from '@/hooks/useFullscreen';

type Model = {
  handleOnBack: () => void;
  handleOnFullscreen: () => void;
  isFullscreen: boolean;
  isOnRoot: boolean;
  isOnTrip: boolean;
  route: string;
};

export function useModel(): Model {
  const pathname = usePathname();

  const router = useRouter();

  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  const [isOnRoot, setIsOnRoot] = useState(true);
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

  const handleOnBack = () => {
    router.back();
  };

  return {
    handleOnBack,
    handleOnFullscreen,
    isFullscreen,
    isOnRoot,
    isOnTrip,
    route: pathname,
  };
}
