'use client';

import { useContext, useEffect, useRef } from 'react';

import { Orientation } from '@/types';
import { getOrientation } from '@/utils';

import { ImageContext } from '../context';

type Model = {
  ref: React.RefObject<HTMLDivElement | null>;
};

export function useModel(): Model {
  const { isLoading, onOrientation } = useContext(ImageContext);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        onOrientation(getOrientation(ref) === Orientation.Landscape);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return {
    ref,
  };
}
