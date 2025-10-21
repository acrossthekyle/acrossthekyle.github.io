'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useEffect, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet';

import type { Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  hoverIndex: number | null;
  route: number[][];
  termini: Termini;
};

export default function Leaflet({
  hoverIndex,
  route,
  termini,
}: Props) {
  const [data, setData] = useState<number[][]>([]);

  useEffect(() => {
    if (route) {
      setData(route);
    }
  }, [route]);

  function Center({ positions }: { positions: number[][] }) {
    const map = useMap();

    useEffect(() => {
      if (positions.length > 0) {
        // @ts-expect-error - will fix later
        const bounds = new L.LatLngBounds(positions);

        map.fitBounds(bounds);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positions]);

    return null;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <MapContainer
      // @ts-expect-error - will fix later
      center={data[0]}
      className={styles.map}
      scrollWheelZoom={false}
      zoom={1}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      />
      <Polyline
        className={styles.route}
        // @ts-expect-error - will fix later
        positions={data}
      />
      {!termini.isSame && (
        <>
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[0]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={4}
          />
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[0]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={2}
          >
            <Tooltip permanent>{termini.start.join(' ')}</Tooltip>
          </CircleMarker>
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[data.length - 1]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={4}
          />
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[data.length - 1]}
            className={`${styles.inner} ${styles.solid}`}
            fillOpacity={1}
            opacity={1}
            radius={3}
          >
            <Tooltip permanent>{termini.end.join(' ')}</Tooltip>
          </CircleMarker>
        </>
      )}
      {hoverIndex !== null && (
        <CircleMarker
          // @ts-expect-error - will fix later
          center={data[hoverIndex]}
          className={styles.outer}
          fill={false}
          opacity={1}
          radius={4}
        />
      )}
      <Center positions={data} />
    </MapContainer>
  );
}
