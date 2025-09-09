'use client';

import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  src: string;
};

export const ImageContext = createContext({
  isLandscapeOrientation: true,
  isLoading: true,
  isMaximized: false,
  isInPortraitMode: false,
  onDismissWarn: () => {
    // noop
  },
  onLoad: () => {
    // noop
  },
  onMaximized: () => {
    // noop
  },
  onMinimized: () => {
    // noop
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOrientation: (isLandscape: boolean) => {
    // noop
  },
  onWarn: () => {
    // noop
  },
  shouldWarn: false,
  src: '',
});

export default function Context({ children, src }: Props) {
  const [isInPortraitMode, setIsInPortraitMode] = useState(false);
  const [isLandscapeOrientation, setIsLandscapeOrientation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [shouldWarn, setShouldWarn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const orientation = window.matchMedia('(orientation: portrait)');

      setIsInPortraitMode(window.matchMedia('(orientation: portrait)').matches);

      const handleOrientationChange = (event: MediaQueryListEvent) => {
        setIsInPortraitMode(event.matches);
      };

      orientation.addEventListener('change', handleOrientationChange);

      return () => {
        orientation.removeEventListener('change', handleOrientationChange);
      };
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  const handleOnMinimized = () => {
    setTimeout(() => {
      setIsMaximized(false);
    }, 400);
  };

  const handleOnMaximized = () => {
    setIsMaximized(true);
  };

  const handleOnOrientation = (isLandscape: boolean) => {
    setIsLandscapeOrientation(isLandscape);
  };

  const handleOnWarn = () => {
    setShouldWarn(true);
  };

  const handleOnDismissWarn = () => {
    setShouldWarn(false);
  };

  return (
    <ImageContext.Provider
      value={{
        isLandscapeOrientation,
        isLoading,
        isMaximized,
        isInPortraitMode,
        onDismissWarn: handleOnDismissWarn,
        onLoad: handleOnLoad,
        onMaximized: handleOnMaximized,
        onMinimized: handleOnMinimized,
        onOrientation: handleOnOrientation,
        onWarn: handleOnWarn,
        shouldWarn,
        src,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
