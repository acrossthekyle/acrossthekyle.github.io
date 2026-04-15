'use client';

import 'leaflet/dist/leaflet.css';

import { useEffect, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
} from 'react-leaflet';

import type { Gpx } from '../../types';

import Coordinates from './coordinates';
import styles from './stylesheet';

type Props = {
  elevationIndex: number | null;
  stageIndex: number | null;
  latLongs: Gpx[];
};

export default function Leaflet({
  elevationIndex,
  stageIndex,
  latLongs,
}: Props) {
  const [data, setData] = useState<Gpx[]>([]);

  useEffect(() => {
    if (latLongs && latLongs.length > 0 && data.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setData(latLongs);
    }
  }, [data, latLongs]);

  if (data.length === 0) {
    return null;
  }

  return (
    <MapContainer
      // @ts-expect-error - allow
      bounds={data}
      boundsOptions={{ padding: [10, 10] }}
      className={styles.map}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      zoom={1}
      dragging={false}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png`}
      />
      <Coordinates />
      {data.map((segment, index: number) => {
        return (
          <Polyline
            key={index}
            pathOptions={{
              color: 'var(--foreground)',
              interactive: false,
              weight: 4,
            }}
            positions={segment}
          />
        );
      })}
      {stageIndex !== null && (
        <Polyline
          className={styles.current}
          pathOptions={{ interactive: false }}
          positions={data[stageIndex]}
        />
      )}
      {stageIndex !== null && elevationIndex !== null && (
        <CircleMarker
          center={data[stageIndex][elevationIndex]}
          className={styles.marker}
          fill={false}
          opacity={1}
          radius={6}
        />
      )}
    </MapContainer>
  );
}
