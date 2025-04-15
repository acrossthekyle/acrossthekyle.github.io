'use client';

import { useEffect } from 'react';

import { useTripsActions, useTripsData, useTripsIsReady } from '@/store/trips';
import type { Components } from '@/types';

type Return = {
  isReady: boolean;
  markers: Components.Marker[];
};

export const useViewModel = (): Return => {
  const { get } = useTripsActions();

  const isReady = useTripsIsReady();
  const markers = useTripsData();

  useEffect(() => {
    get();
  }, [get]);

  return {
    isReady,
    markers,
  };
};

export default function Node() {
  return null;
}
