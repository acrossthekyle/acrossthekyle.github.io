'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'react-leaflet';

import type { Collection } from '@/types';

import { styles } from './stylesheet';

type Props = {
  collection: Collection;
};

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

  function ZoomToCollection({ zoom }: { zoom: number }) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(coordinates, zoom, { duration: 1.5 });
    }, [zoom, map]);

    return null;
  };

  return (
    <MapContainer
      center={[10, -25]}
      className={styles.container}
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
        url={`https://{s}.basemaps.cartocdn.com/${resolvedTheme === 'light' ? 'light' : 'dark'}_nolabels/{z}/{x}/{y}{r}.png`}
      />
      <ZoomToCollection zoom={4} />
    </MapContainer>
  );
}
