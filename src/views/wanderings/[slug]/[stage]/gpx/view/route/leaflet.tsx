'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useEffect, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';

import type { Gpx } from '@/types';

import styles from './stylesheet';

type Props = {
  gpx: Gpx;
  hoverIndex: number | null;
};

export default function Leaflet({
  gpx,
  hoverIndex,
}: Props) {
  const [data, setData] = useState<Gpx>([]);

  useEffect(() => {
    if (gpx) {
      setData(gpx);
    }
  }, [gpx]);

  function Center({ positions }: { positions: Gpx }) {
    const map = useMap();

    useEffect(() => {
      if (positions.length > 0) {
        map.addHandler('gestureHandling', GestureHandling);

        const bounds = new L.LatLngBounds(positions);

        map.fitBounds(bounds);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positions]);

    return null;
  }

  if (data === null) {
    return null;
  }

  return (
    <MapContainer
      center={data[0]}
      className={styles.map}
      // @ts-expect-error prop is necessary
      gestureHandling={true}
      scrollWheelZoom={false}
      zoom={1}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png`}
      />
      <Polyline
        className={styles.route}
        positions={data}
      />
      {hoverIndex !== null && (
        <CircleMarker
          center={data[hoverIndex]}
          className={styles.outer}
          fill={false}
          opacity={1}
          radius={6}
        />
      )}
      <Center positions={data} />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
