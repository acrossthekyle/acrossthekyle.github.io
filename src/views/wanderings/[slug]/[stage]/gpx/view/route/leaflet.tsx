'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useEffect, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Marker,
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
  theme: string;
};

const finish = L.divIcon({
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
  `,
  className: '',
  iconAnchor: [12, 16],
})

export default function Leaflet({
  gpx,
  hoverIndex,
  isSame,
  theme,
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
        url={`https://{s}.basemaps.cartocdn.com/${theme === 'dark' ? 'dark' : 'light'}_nolabels/{z}/{x}/{y}{r}.png`}
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
          <Marker position={data[data.length - 1]} icon={finish} />
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
