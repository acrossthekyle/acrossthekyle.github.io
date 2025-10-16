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
  route: [number, number][];
  termini: Termini;
};

export default function Leaflet({ route, termini }: Props) {
  const [data, setData] = useState<[number, number][]>([]);

  useEffect(() => {
    if (route) {
      setData(route);
    }
  }, [route]);

  function Center({ positions }: { positions: [number, number][] }) {
    const map = useMap();

    useEffect(() => {
      if (positions.length > 0) {
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
        positions={data}
      />
      {!termini.isSame && (
        <>
          <CircleMarker
            center={data[0]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={4}
          />
          <CircleMarker
            center={data[0]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={2}
          >
            <Tooltip permanent>{termini.start.join(' ')}</Tooltip>
          </CircleMarker>
          <CircleMarker
            center={data[data.length - 1]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={4}
          />
          <CircleMarker
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
      <Center positions={data} />
    </MapContainer>
  );
}
