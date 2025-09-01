'use client';

import { useEffect, useRef } from 'react';

import { useTravels } from '@/hooks/useTravels';

type Travel = {
  path: string;
  text: string[];
};

type Model = {
  isLoading: boolean;
  ref: React.RefObject<HTMLAnchorElement | null>;
  travels: Travel[];
};

export function useModel(): Model {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const { all, isLoading, travels } = useTravels();

  useEffect(() => {
    all();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    ref,
    travels: travels.map((travel) => ({
      path: `/travels/${travel.slug}`,
      text: travel.title,
    })),
  };
}
