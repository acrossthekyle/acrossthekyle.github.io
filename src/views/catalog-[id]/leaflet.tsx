'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useTheme } from 'next-themes';
import {
  CircleMarker,
  MapContainer,
  TileLayer,
} from 'react-leaflet';

import styles from './stylesheet';

type Props = {
  coordinates: string;
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

export default function Leaflet({ coordinates }: Props) {
  const { resolvedTheme } = useTheme();

  const center = parseToLeaflet(coordinates);

  return (
    <MapContainer
      // @ts-expect-error - format is correct
      center={center}
      className={styles.plugin}
      doubleClickZoom={false}
      gestureHandling={true}
      scrollWheelZoom={false}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      minZoom={2}
      zoom={3}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        key={resolvedTheme}
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/${resolvedTheme === 'light' ? 'light' : 'dark'}_nolabels/{z}/{x}/{y}{r}.png`}
      />
      <CircleMarker
        // @ts-expect-error - format is correct
        center={center}
        className={styles.marker1}
        fill={false}
        opacity={1}
        radius={16}
      />
      <CircleMarker
        // @ts-expect-error - format is correct
        center={center}
        className={styles.marker2}
        fill={false}
        opacity={1}
        radius={11}
      />
      <CircleMarker
        // @ts-expect-error - format is correct
        center={center}
        className={styles.marker3}
        fill={false}
        opacity={1}
        radius={6}
      />
      <CircleMarker
        // @ts-expect-error - format is correct
        center={center}
        className={styles.marker4}
        fill={false}
        opacity={1}
        radius={2}
      />
    </MapContainer>
  );
}
