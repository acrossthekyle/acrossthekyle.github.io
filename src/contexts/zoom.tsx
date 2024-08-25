'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export const ZoomContext = createContext({
  isZoomed: false,
  toggleZoom: () => {
    // noop
  },
});

export const Zoom = ({ children }: Props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const backdrop = document.querySelector('[data-backdrop]');

      if (backdrop) {
        backdrop.addEventListener('click', handleOnReset);
      }

      document.addEventListener('keyup', handleOnReset);
      window.addEventListener('scroll', handleOnReset);
      window.addEventListener('resize', handleOnReset);
    }

    return () => {
      const backdrop = document.querySelector('[data-backdrop]');

      if (backdrop) {
        backdrop.removeEventListener('click', handleOnReset);
      }

      document.removeEventListener('keyup', handleOnReset);
      window.removeEventListener('scroll', handleOnReset);
      window.removeEventListener('resize', handleOnReset);
    };
  }, []);

  useEffect(() => {
    const backdrop = document.querySelector('[data-backdrop]');

    if (backdrop) {
      backdrop.setAttribute(
        'data-backdrop-active',
        isZoomed === false ? 'false' : 'true',
      );
    }
  }, [isZoomed]);

  const handleOnReset = () => {
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <ZoomContext.Provider value={{ isZoomed, toggleZoom }}>
      {children}
    </ZoomContext.Provider>
  );
};
