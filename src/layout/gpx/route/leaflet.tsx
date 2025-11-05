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
  Tooltip,
  useMap,
} from 'react-leaflet';

import type { Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  elevation: string[];
  hoverIndex: number | null;
  resize: boolean;
  route: number[][];
  termini: Termini;
};

export default function Leaflet({
  elevation,
  hoverIndex,
  resize,
  route,
  termini,
}: Props) {
  const [data, setData] = useState<number[][]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (route) {
      let theme = 'light';

      if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme') || 'light';
      }

      setIsDarkMode(theme !== 'light');

      setData(route);
    }
  }, [route]);

  function Center({ positions }: { positions: number[][] }) {
    const map = useMap();

    useEffect(() => {
      map.invalidateSize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resize]);

    useEffect(() => {
      if (positions.length > 0) {
        map.addHandler('gestureHandling', GestureHandling);

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
      gestureHandling={true}
      zoom={1}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url={`https://{s}.basemaps.cartocdn.com/${isDarkMode ? 'dark' : 'light'}_nolabels/{z}/{x}/{y}{r}.png`}
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
            radius={6}
          />
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[0]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={5}
          >
            <Tooltip permanent>
              <span className={styles.eyebrow}>Start</span>
              {termini.start.map((line, index) => (
                <span className={styles.line} key={index}>{line}</span>
              ))}
              <span className={styles.elevation}>
                {new Intl.NumberFormat().format(Number(elevation[0]))} ft
              </span>
            </Tooltip>
          </CircleMarker>
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[data.length - 1]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={6}
          />
          <CircleMarker
            // @ts-expect-error - will fix later
            center={data[data.length - 1]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={5}
          >
            <Tooltip permanent>
              <span className={styles.eyebrow}>Finish</span>
              {termini.end.map((line, index) => (
                <span className={styles.line} key={index}>{line}</span>
              ))}
              <span className={styles.elevation}>
                {new Intl.NumberFormat().format(Number(elevation[elevation.length - 1]))} ft
              </span>
            </Tooltip>
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
          radius={6}
        />
      )}
      <Center positions={data} />
    </MapContainer>
  );
}
