'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';

import L, { LeafletMouseEvent } from 'leaflet';
import { GestureHandling } from 'leaflet-gesture-handling';
import { useEffect, useState } from 'react';
import {
  CircleMarker,
  FeatureGroup,
  MapContainer,
  Polyline,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';

import type { Gpx } from '../../../types';

import styles from './stylesheet';

type Props = {
  activeIndex: number;
  hoverIndex: number | null;
  latLongs: Gpx[];
  onClick: (index: number) => void;
};

interface GestureMap extends L.Map {
  gestureHandling?: {
    _handleMouseOver?: () => void;
  };
};

export default function Leaflet({
  activeIndex,
  hoverIndex,
  latLongs,
  onClick,
}: Props) {
  const [data, setData] = useState<Gpx[]>([]);

  useEffect(() => {
    if (latLongs && latLongs.length > 0 && data.length === 0) {
      setData(latLongs);
    }
  }, [data, latLongs]);

  function Center({ positions }: { positions: Gpx[] }) {
    const map = useMap();

    useEffect(() => {
      if (positions.length > 0 && positions[activeIndex] && positions[activeIndex].length > 0) {
        map.addHandler('gestureHandling', GestureHandling);

        const bounds = L.latLngBounds(positions[activeIndex]);

        if (bounds.isValid()) {
          map.fitBounds(bounds);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positions, activeIndex, map]);

    return null;
  };

  function GestureFix() {
    const map = useMap() as GestureMap;

    useEffect(() => {
      map.whenReady(() => {
        map.gestureHandling?._handleMouseOver?.();
      });
    }, [map]);

    return null;
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <MapContainer
      center={data[0][0]}
      className={styles.map}
      // @ts-expect-error prop is necessary
      gestureHandling={true}
      scrollWheelZoom={false}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      minZoom={2}
      zoom={1}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png`}
      />
      {data.map((segment, index: number) => {
        return (
          <FeatureGroup key={index}>
            <Polyline
              pathOptions={{
                className: 'peer',
                color: 'transparent',
                interactive: true,
                opacity: 0,
                weight: 20,
              }}
              eventHandlers={{
                click: (e: LeafletMouseEvent) => {
                  L.DomEvent.stopPropagation(e);

                  onClick(index);
                },
              }}
              positions={segment}
            />
            <Polyline
              pathOptions={{
                className: `trail-hoverable transition-all duration-300`,
                color: '#bbbbbb',
                interactive: false,
                weight: 4,
              }}
              positions={segment}
            />
          </FeatureGroup>
        );
      })}
      <Polyline
        className={styles.current}
        pathOptions={{ interactive: false }}
        positions={data[activeIndex]}
      />
      {hoverIndex !== null && (
        <CircleMarker
          center={data[activeIndex][hoverIndex]}
          className={styles.marker}
          fill={false}
          opacity={1}
          radius={6}
        />
      )}
      <Center positions={data} />
      <GestureFix />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
