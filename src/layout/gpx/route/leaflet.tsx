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

import type { Gpx, Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  gpx: Gpx;
  hoverIndex: number | null;
  resize: boolean;
  termini: Termini;
};

export default function Leaflet({
  gpx,
  hoverIndex,
  resize,
  termini,
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
      map.invalidateSize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resize]);

    useEffect(() => {
      if (positions.length > 0) {
        map.addHandler('gestureHandling', GestureHandling);

        let start = 0;
        let end = 0;

        termini.start.words.map((line) => {
          if (line.length > start) {
            start = line.length;
          }
        });

        termini.end.words.map((line) => {
          if (line.length > end) {
            end = line.length;
          }
        });

        const longest = start > end ? start : end;

        const bounds = new L.LatLngBounds(positions);

        map.fitBounds(bounds, {
          padding: [
            longest >= 12 ? 150 : 100,
            longest >= 12 ? 150 : 100,
          ],
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
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url={`https://{s}.basemaps.cartocdn.com/${isDarkMode ? 'dark' : 'light'}_nolabels/{z}/{x}/{y}{r}.png`}
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
            radius={6}
          />
          <CircleMarker
            center={data[0]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={5}
          >
            <Tooltip
              permanent
              // @ts-expect-error string is fine
              direction={termini.start.position !== null ? termini.start.position : undefined}
            >
              <span className={styles.eyebrow}>Start</span>
              {termini.start.words.map((line, index) => (
                <span className={styles.line} key={index}>{line}</span>
              ))}
              <span className={styles.elevation}>
                {new Intl.NumberFormat().format(gpx[0][2])} ft
              </span>
            </Tooltip>
          </CircleMarker>
          <CircleMarker
            center={data[data.length - 1]}
            className={styles.outer}
            fill={false}
            opacity={1}
            radius={6}
          />
          <CircleMarker
            center={data[data.length - 1]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={5}
          >
            <Tooltip
              permanent
              // @ts-expect-error string is fine
              direction={termini.end.position !== null ? termini.end.position : undefined}
            >
              <span className={styles.eyebrow}>End</span>
              {termini.end.words.map((line, index) => (
                <span className={styles.line} key={index}>{line}</span>
              ))}
              <span className={styles.elevation}>
                {new Intl.NumberFormat().format(gpx[gpx.length - 1][2])} ft
              </span>
            </Tooltip>
          </CircleMarker>
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
    </MapContainer>
  );
}
