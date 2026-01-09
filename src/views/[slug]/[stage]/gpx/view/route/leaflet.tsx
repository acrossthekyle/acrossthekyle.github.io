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
  isSame: boolean;
};

export default function Leaflet({
  gpx,
  hoverIndex,
  isSame,
}: Props) {
  const [data, setData] = useState<Gpx>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (gpx) {
      let theme = 'light';

      if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme') || 'light';
      }

      setIsDarkMode(theme !== 'light');

      setData(gpx);
    }
  }, [gpx]);

  function Center({ positions }: { positions: Gpx }) {
    const map = useMap();

    useEffect(() => {
      if (positions.length > 0) {
        map.addHandler('gestureHandling', GestureHandling);

        const bounds = new L.LatLngBounds(positions);

        map.fitBounds(bounds, {
          padding: [10, 10],
        });
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
      scrollWheelZoom={false}
      // @ts-expect-error prop is necessary
      gestureHandling={true}
      zoom={1}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url={`https://{s}.basemaps.cartocdn.com/${isDarkMode ? 'dark' : 'light'}_nolabels/{z}/{x}/{y}{r}.png`}
      />
      <Polyline
        className={styles.route}
        positions={data}
      />
      {!isSame && (
        <>
          <CircleMarker
            center={data[0]}
            className={styles.start}
            fillOpacity={1}
            opacity={1}
            radius={5}
          />
          <CircleMarker
            center={data[data.length - 1]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={6}
          />
          <CircleMarker
            center={data[data.length - 1]}
            className={styles.end}
            fillOpacity={1}
            opacity={1}
            radius={5}
          />
        </>
      )}
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
