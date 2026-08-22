'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Tooltip, useMap } from 'react-leaflet';

import tw from '@/styles';
import type { Collection, Landmark } from '@/types';

import Landmark from './landmark';
import { parseCoordinates } from './utils';

type Props = {
  canRenderLandmarks: boolean;
  collection: Collection;
  landmarks?: Landmark[];
};

L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

export default function Leaflet({
  canRenderLandmarks,
  collection,
  landmarks,
}: Props) {
  const { resolvedTheme } = useTheme();

  const coordinates = parseCoordinates(collection.coordinates);

  function ZoomToCollection({ zoom }: { zoom: number }) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(coordinates, zoom, { duration: 1.5 });
    }, [zoom, map]);

    return null;
  };

  function FitLandmarks() {
    const map = useMap();

    useEffect(() => {
      if (!canRenderLandmarks || !landmarks || landmarks.length === 0) {
        return;
      }

      const bounds = L.latLngBounds(
        landmarks.map((landmark) => parseCoordinates(landmark.coordinates))
      );

      map.flyToBounds(bounds, { duration: 1.5 });
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      // @ts-expect-error - format is correct
      center={coordinates}
      className={styles.container}
      gestureHandling={false}
      scrollWheelZoom={false}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      minZoom={2}
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
        url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png`}
      />
      {canRenderLandmarks && (landmarks || []).map((landmark) => (
        <Landmark key={landmark.coordinates} landmark={landmark} />
      ))}
      {canRenderLandmarks && (landmarks || []).length > 0 ? (
        <FitLandmarks />
      ) : (
        <ZoomToCollection zoom={4} />
      )}
    </MapContainer>
  );
};

const styles = tw({
  container: `
    relative z-1
    h-full w-full
    mask-t-from-90% mask-t-to-100%
    grayscale

    dark:brightness-85

    sm:mask-none
  `,
});
