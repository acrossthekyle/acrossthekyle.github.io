'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
  src: string;
};

export const ImageContext = createContext({
  isLoading: false,
  isMaximized: false,
  onLoad: () => {
    // noop
  },
  onMaximized: () => {
    // noop
  },
  onMinimized: () => {
    // noop
  },
  src: '',
});

export default function Context({ children, src }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

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

  return (
    <ImageContext.Provider
      value={{
        isLoading,
        isMaximized,
        onLoad: handleOnLoad,
        onMaximized: handleOnMaximized,
        onMinimized: handleOnMinimized,
        src,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
