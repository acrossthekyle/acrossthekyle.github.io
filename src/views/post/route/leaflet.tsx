'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useEffect, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polyline,
  useMap,
} from 'react-leaflet';

import styles from './stylesheet';

type Props = {
  route: [number, number][];
};

export default function Leaflet({ route }: Props) {
  const [data, setData] = useState<[number, number][]>([]);

  useEffect(() => {
    if (route) {
      setData(route);
    }
  }, [route]);

  function Center({
    center
  }: { center: [number, number][] }) {
    const map = useMap();

    useEffect(() => {
      if (center.length > 0) {
        const bounds = new L.LatLngBounds(center);

        map.fitBounds(bounds);
        map.dragging.disable();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center]);

    return null;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <MapContainer
      center={data[0]}
      className={styles.map}
      doubleClickZoom={false}
      keyboard={false}
      scrollWheelZoom={false}
      zoom={14}
      zoomControl={false}
    >
      <Polyline
        className={styles.route}
        positions={data}
      />
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
      />
      <CircleMarker
        center={data[data.length - 1]}
        className={styles.outer}
        fill={false}
        opacity={1}
        radius={4}
      />
      <CircleMarker
        center={data[data.length - 1]}
        className={styles.inner}
        fillOpacity={1}
        opacity={1}
        radius={2}
      />
      <Center center={data} />
    </MapContainer>
  );
}
