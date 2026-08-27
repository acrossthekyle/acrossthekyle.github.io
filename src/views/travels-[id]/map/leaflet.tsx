'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import {
  MapContainer,
  Polyline,
  TileLayer,
  useMap,
} from 'react-leaflet';

import tw from '@/styles';
import type { Landmark as LandmarkType, Trail } from '@/types';

import Landmark from './landmark';
import { parseCoordinates } from './utils';

type Props = {
  center: string;
  landmarks?: LandmarkType[];
  trail?: Trail[];
};

L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

export default function Leaflet({
  center,
  landmarks,
  trail,
}: Props) {
  const { resolvedTheme } = useTheme();

  const hasLandmarks = (landmarks || []).length > 0;
  const hasTrail = (trail || []).length > 0;

  const location = parseCoordinates(center);

  const coordinates = (trail || []).map(chunk => {
    return chunk.map(segment => segment.coordinates);
  });

  function Fit() {
    const map = useMap();

    useEffect(() => {
      if (hasTrail) {
        // @ts-expect-error - format is correct
        const bounds = L.latLngBounds(coordinates);

        map.fitBounds(bounds, { animate: false });

        return;
      }

      if (hasLandmarks) {
        const bounds = L.latLngBounds(
          // @ts-expect-error - format is correct
          landmarks.map((landmark) => parseCoordinates(landmark.coordinates))
        );

        map.fitBounds(bounds, { padding: [12, 12], animate: false });

        return;
      }

      // @ts-expect-error - format is correct
      map.flyTo(location, 4, { duration: 1.5 });
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      // @ts-expect-error - format is correct
      center={location}
      className={styles.container}
      gestureHandling={false}
      scrollWheelZoom={false}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      minZoom={4}
      zoom={2}
      zoomControl={false}
      dragging={false}
      boxZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      keyboard={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        key={resolvedTheme}
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/${resolvedTheme}_nolabels/{z}/{x}/{y}{r}.png?key=cb1_2bqa_1_f831d7c3d90199580464a9de`}
      />
      {hasLandmarks && (landmarks || []).map((landmark) => (
        <Landmark key={landmark.coordinates} landmark={landmark} />
      ))}
      {hasTrail && (trail || []).map((chunk, index) => (
        <Polyline
          className={styles.route}
          key={index}
          // @ts-expect-error - format is correct
          positions={chunk.map(segment => segment.coordinates)}
        />
      ))}
      <Fit />
    </MapContainer>
  );
};

const styles = tw({
  container: `
    relative z-1
    h-full w-full
    mask-t-from-90% mask-t-to-100%
    grayscale

    sm:mask-none
  `,
  route: `
    !pointer-events-none
    stroke-(--foreground) dark:stroke-(--background)
  `,
});
