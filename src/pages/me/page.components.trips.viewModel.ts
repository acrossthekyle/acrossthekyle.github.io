'use client';

import { useEffect } from 'react';

import Hooks from '@/hooks';
import type { Components } from '@/types';

type Return = {
  isReady: boolean;
  markers: Components.Marker[];
};

export const useViewModel = (): Return => {
  const { data, fetchData, isReady } = Hooks.useApi();

  useEffect(() => {
    fetchData('markers');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isReady,
    markers: data || [],
  };
};

export default function Node() {
  return null;
}
