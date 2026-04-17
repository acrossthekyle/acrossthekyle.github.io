'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L, { LeafletMouseEvent } from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useEffect, useRef, useState } from 'react';
import {
  CircleMarker,
  FeatureGroup,
  MapContainer,
  Polyline,
  TileLayer,
  useMap,
} from 'react-leaflet';

import type { Gpx } from '../../types';

import styles from './stylesheet';

const WORLD_ZOOM_LEVEL = 2;

type Props = {
  elevationIndex: number | null;
  onStage: (index: number | null) => void;
  stageIndex: number | null;
  latLongs: Gpx[];
};

L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

export default function Leaflet({
  elevationIndex,
  onStage,
  stageIndex,
  latLongs,
}: Props) {
  const [data, setData] = useState<Gpx[]>([]);

  useEffect(() => {
    if (latLongs && latLongs.length > 0 && data.length === 0) {
      setData(latLongs);
    }
  }, [data, latLongs]);

  const handleOnPolyline = (index: number) => {
    onStage(index);
  };

  const Controls = () => {
    const map = useMap();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (ref.current) {
        L.DomEvent.disableClickPropagation(ref.current);
        L.DomEvent.disableScrollPropagation(ref.current);
      }
    }, []);

    const handleOnWorld = () => {
      map.setZoom(WORLD_ZOOM_LEVEL)
    };

    const handleOnTrail = () => {
      // @ts-expect-error - allow data type
      const bounds = new L.LatLngBounds(data);

      map.fitBounds(bounds, { padding: [10, 10] });
    };

    const handleOnStart = () => {
      if (stageIndex === null) {
        onStage(0);
      } else {
        onStage(null);
      }
    };

    return (
      <div className={styles.controls} ref={ref}>
        <div className={styles.zooms}>
          <button
            className={styles.control(stageIndex !== null)}
            onClick={handleOnStart}
          >
            {data.length > 1 ? 'Segments' : 'Stats'}
          </button>
          <button
            className={styles.control()}
            onClick={handleOnWorld}
          >
            World
          </button>
          <button
            className={styles.control()}
            onClick={handleOnTrail}
          >
            Trail
          </button>
          <button
            className={styles.control()}
            onClick={() => map.zoomIn()}
          >
            Zoom in
          </button>
          <button
            className={styles.control()}
            onClick={() => map.zoomOut()}
          >
            Zoom out
          </button>
        </div>
      </div>
    );
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <MapContainer
      // @ts-expect-error - allow data type
      bounds={data}
      boundsOptions={{ padding: [10, 10] }}
      className={styles.map}
      gestureHandling={true}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      zoom={1}
      minZoom={3}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png`}
      />
      <Polyline
        positions={data}
        className="polyline-glow"
      />
      {data.map((segment, index: number) => (
        <FeatureGroup key={index}>
          <Polyline
            pathOptions={{
              className: 'leaflet-segment-hoverable-peer',
              color: 'transparent',
              interactive: true,
              opacity: 0,
              weight: 20,
            }}
            eventHandlers={{
              click: (event: LeafletMouseEvent) => {
                L.DomEvent.stopPropagation(event);

                handleOnPolyline(index);
              },
            }}
            positions={segment}
          />
          <Polyline
            key={index}
            pathOptions={{
              className: 'leaflet-segment-hoverable',
              color: 'var(--foreground)',
              interactive: false,
              weight: 2,
            }}
            positions={segment}
          />
        </FeatureGroup>
      ))}
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
      <Controls />
    </MapContainer>
  );
}
