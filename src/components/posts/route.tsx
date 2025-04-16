'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import {
  Circle,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet';

import Styles from '@/styles';
import type { Posts } from '@/types';

import { useViewModel } from './route.viewModel';

const scss = Styles.Components.Posts.Route;

type Props = {
  route?: number[][];
  start?: string;
  stop?: string;
};

function RouteMapBounds({ route }: { route: number[][] }) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      map.fitBounds(route);
    }
  }, [route, map]);

  return <></>;
}

function RouteMap({ route, start, stop }: Props) {
  const { tile } = useViewModel();

  if (!route) {
    return null;
  }

  return (
    <div className={scss.container}>
      <MapContainer
        className={scss.map}
        // @ts-ignore-error
        zoom={13}
        // @ts-ignore-error
        scrollWheelZoom={false}
      >
        <TileLayer url={tile} />
        <Polyline
          // @ts-ignore-error
          className={scss.polyline}
          // @ts-ignore-error
          positions={route}
        />
        {start && (
          <Circle
            // @ts-ignore-error
            center={route[0]}
            // @ts-ignore-error
            className={scss.start}
            // @ts-ignore-error
            fill
            // @ts-ignore-error
            fillOpacity={0.5}
            // @ts-ignore-error
            radius={150}
            // @ts-ignore-error
            stroke={false}
          >
            <Tooltip
              // @ts-ignore-error
              className={scss.tooltip}
              // @ts-ignore-error
              permanent
            >
              {start}
            </Tooltip>
          </Circle>
        )}
        {stop && (
          <Circle
            // @ts-ignore-error
            center={route[route.length - 1]}
            // @ts-ignore-error
            className={scss.finish}
            // @ts-ignore-error
            fill
            // @ts-ignore-error
            fillOpacity={0.5}
            // @ts-ignore-error
            radius={150}
            // @ts-ignore-error
            stroke={false}
          >
            <Tooltip
              // @ts-ignore-error
              className={scss.tooltip}
              // @ts-ignore-error
              permanent
            >
              {stop}
            </Tooltip>
          </Circle>
        )}
        <RouteMapBounds route={route} />
      </MapContainer>
    </div>
  );
}

export default RouteMap;
