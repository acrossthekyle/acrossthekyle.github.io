'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useTheme } from 'next-themes';
import { MapContainer, TileLayer } from 'react-leaflet';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  collection: Collection;
};

L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

function parseToLeaflet(coordinates: string) {
  const parts = coordinates.split(',');

  let lat = parseFloat(parts[0]);
  let lng = parseFloat(parts[1]);

  if (parts[0].includes('S')) {
    lat = -lat;
  }

  if (parts[1].includes('W')) {
    lng = -lng;
  }

  return [lat, lng];
}

export default function Leaflet({ collection }: Props) {
  const { resolvedTheme } = useTheme();

  const coordinates = parseToLeaflet(collection.coordinates);

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
      zoom={4}
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
        url={`https://{s}.basemaps.cartocdn.com/${resolvedTheme === 'light' ? 'light' : 'dark'}_nolabels/{z}/{x}/{y}{r}.png`}
      />
    </MapContainer>
  );
};

const styles = tw({
  container: `
    relative z-1
    h-full w-full
    mask-t-from-80% mask-t-to-100%
    mask-b-from-80% mask-b-to-100%
  `,
});
