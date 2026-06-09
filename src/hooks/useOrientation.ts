'use client';

import { useEffect, useState } from 'react';

export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(() => {
    if (typeof window === 'undefined') return 'portrait';
    return window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(orientation: portrait)');

    const handleOrientationChange = (event: MediaQueryListEvent) => {
      setOrientation(event.matches ? 'portrait' : 'landscape');
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleOrientationChange);
    } else {
      mediaQueryList.addListener(handleOrientationChange);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleOrientationChange);
      } else {
        mediaQueryList.removeListener(handleOrientationChange);
      }
    };
  }, []);

  return orientation;
}
