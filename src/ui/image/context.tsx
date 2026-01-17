'use client';

import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  src: string;
};

export const ImageContext = createContext({
  isLoading: true,
  onLoad: () => {
    // noop
  },
  src: '',
});

export default function Context({ children, src }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <ImageContext.Provider
      value={{
        isLoading,
        onLoad: handleOnLoad,
        src,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
