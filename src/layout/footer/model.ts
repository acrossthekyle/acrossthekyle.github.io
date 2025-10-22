'use client';

import { useEffect, useState } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

export const useModel = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(false);

  const { isOnRoot } = useHierarchy();

  useEffect(() => {
    setIsFullscreenSupported(document.fullscreenEnabled);
  }, []);

  const maximize = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();

      setIsFullscreen(true);
    }
  };

  const minimize = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();

      setIsFullscreen(false);
    }
  };

  const handleOnToggle = () => {
    if (document.fullscreenElement) {
      minimize();
    } else {
      maximize();
    }
  };

  return {
    handleOnToggle,
    isFullscreen,
    isFullscreenSupported,
    isOnRoot,
  };
};
