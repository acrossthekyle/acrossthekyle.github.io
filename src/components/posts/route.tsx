'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
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
  route?: [number, number][];
  start?: string;
  stop?: string;
};

function RouteMapBounds({ route }: { route: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      const bounds = new L.LatLngBounds(route);

      map.fitBounds(bounds);
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
      <MapContainer className={scss.map} zoom={13} scrollWheelZoom={false}>
        <TileLayer url={tile} />
        <Polyline className={scss.polyline} positions={route} />
        {start && (
          <Circle
            center={route[0]}
            className={scss.start}
            fill
            fillOpacity={0.5}
            radius={150}
            stroke={false}
          >
            <Tooltip className={scss.tooltip} permanent>
              {start}
            </Tooltip>
          </Circle>
        )}
        {stop && (
          <Circle
            center={route[route.length - 1]}
            className={scss.finish}
            fill
            fillOpacity={0.5}
            radius={150}
            stroke={false}
          >
            <Tooltip className={scss.tooltip} permanent>
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
