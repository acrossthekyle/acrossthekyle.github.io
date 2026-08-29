'use client';

import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import type { Landmark, Trail } from '@/types';

import { parseCoordinates } from './utils';

export function useModel(
  center: string,
  trail?: Trail[],
  landmarks?: Landmark[],
) {
  const map = useMap();

  const fitToTrail = (trail?: Trail[]) => {
    const coordinates = (trail || []).map(chunk =>
      chunk.map(segment => segment.coordinates)
    );

    if (coordinates.length === 0) {
      return;
    }

    // @ts-expect-error - format is correct
    const bounds = L.latLngBounds(coordinates);

    map.fitBounds(bounds, {
      animate: false,
    });
  };

  const fitToLandmarks = (landmarks?: Landmark[]) => {
    const coordinates = (landmarks || []).map(landmark =>
      parseCoordinates(landmark.coordinates)
    );

    if (coordinates.length === 0) {
      return;
    }

    // @ts-expect-error - format is correct
    const bounds = L.latLngBounds(coordinates);

    map.fitBounds(bounds, {
      padding: [12, 12],
      animate: false,
    });
  };

  const fitToCoordinates = (center: string) => {
    // @ts-expect-error - format is correct
    map.flyTo(parseCoordinates(center), 4, {
      duration: 1.5,
    });
  };

  useEffect(() => {
    const hasLandmarks = (landmarks || []).length > 0;
    const hasTrail = (trail || []).length > 0;

    if (hasTrail) {
      fitToTrail(trail);

      return;
    }

    if (hasLandmarks) {
      fitToLandmarks(landmarks);

      return;
    }

    fitToCoordinates(center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
}
