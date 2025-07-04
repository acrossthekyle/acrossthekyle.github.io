import { useEffect } from 'react';

import { useStore } from './store';
import { type Marker } from './types';

type Model = {
  markers: Marker[];
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
