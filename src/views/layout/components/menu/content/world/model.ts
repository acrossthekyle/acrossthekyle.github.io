import { useEffect } from 'react';

import { type Coordinates } from '@/types';

import { useStore } from './store';

type Model = {
  markers: Coordinates[];
};

export function useModel(): Model {
  const { fetch, markers } = useStore();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    markers,
  };
}
