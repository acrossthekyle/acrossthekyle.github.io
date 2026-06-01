'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useTheme } from 'next-themes';
import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from 'react-leaflet';

import type { Collection } from '@/types';

import styles from './stylesheet';

type Props = {
  collections: Collection[];
  current: string | string[] | null;
  onClick: (id: string) => void;
};

L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

function parseToLeaflet(coordinates: string) {
  const parts = coordinates.split(',');

  let lat = parseFloat(parts[0]);
  let lng = parseFloat(parts[1]);

  if (parts[0].includes('S')) {
    lat = -lat;
  }

  if (parts[1].includes('W')) {
    lng = -lng;
  }

  return [lat, lng];
}

export default function Leaflet({ collections, current, onClick }: Props) {
  const { resolvedTheme } = useTheme();

  const collection = collections.find(collection => collection.id === current);

  function ZoomToCollection({ zoom }: { zoom: number }) {
    const map = useMap();

    useEffect(() => {
      if (current) {
        if (collection) {
          const coordinates = parseToLeaflet(collection.coordinates);

          // @ts-expect-error - format is correct
          map.flyTo(coordinates, zoom, { duration: 1 });
        }
      } else {
        map.flyTo([10, -25], 2, { duration: 1 });
      }
    }, [zoom, map]);

    return null;
  };

  function Marker({ center, children, ...rest }: PropsWithChildren<{
    center: number[];
    className: string;
    eventHandlers?: object;
    fill: boolean;
    radius: number;
  }>) {
    const [isAnimating, setIsAnimating] = useState(false);

    useMapEvents({
      zoomstart() {
        setIsAnimating(true);
      },
      zoomend() {
        setIsAnimating(false);
      }
    });

    if (isAnimating) {
      return null
    };

    return (
      <CircleMarker
        // @ts-expect-error - format is correct
        center={center}
        {...rest}
      >
        {children}
      </CircleMarker>
    );
  };

  return (
    <MapContainer
      center={[10, -25]}
      className={styles.plugin}
      // @ts-expect-error - property is necessary
      gestureHandling={true}
      scrollWheelZoom={false}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      minZoom={2}
      zoom={2}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        key={resolvedTheme}
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/${resolvedTheme === 'light' ? 'light' : 'dark'}_nolabels/{z}/{x}/{y}{r}.png`}
      />
      {collections.map((item, index) => {
        const coordinates = parseToLeaflet(item.coordinates);
        const isActive = current === item.id;

        return (
          <Fragment key={index}>
            <Marker
              center={coordinates}
              className={styles.marker(isActive)}
              fill={false}
              radius={16}
              eventHandlers={{
                click: () => onClick(item.id),
              }}
            >
              {!isActive && (
                <Tooltip direction="bottom">
                  {item.title.join(' ')}
                </Tooltip>
              )}
            </Marker>
            <Marker
              center={coordinates}
              className={styles.marker1}
              fill={false}
              radius={11}
            />
            <Marker
              center={coordinates}
              className={styles.marker2}
              fill={false}
              radius={6}
            />
            <Marker
              center={coordinates}
              className={styles.marker3}
              fill={false}
              radius={2}
            />
          </Fragment>
        );
      })}
      <ZoomToCollection zoom={6} />
    </MapContainer>
  );
}
