'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useContext, useEffect } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet';

import Contexts from '@/contexts';
import Styles from '@/styles';
import type { Posts } from '@/types';

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
  const { theme } = useContext(Contexts.ThemeContext);

  if (!route) {
    return null;
  }

  return (
    <div className={scss.container}>
      <MapContainer
        className={scss.map}
        maxZoom={20}
        minZoom={0}
        scrollWheelZoom={false}
        zoom={13}
      >
        <TileLayer
          attribution={
            '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          }
          url={`/api/posts/route/tile?z={z}&x={x}&y={y}&r={r}&theme=${theme}&version=jTypU3sZFz`}
        />
        <Polyline className={scss.polyline} positions={route} />
        {start && (
          <CircleMarker center={route[0]} className={scss.start} radius={10}>
            <Tooltip className={scss.tooltip} permanent>
              {start}
            </Tooltip>
          </CircleMarker>
        )}
        {stop && (
          <CircleMarker
            center={route[route.length - 1]}
            className={scss.stop}
            radius={10}
          >
            <Tooltip className={scss.tooltip} permanent>
              {stop}
            </Tooltip>
          </CircleMarker>
        )}
        <RouteMapBounds route={route} />
      </MapContainer>
    </div>
  );
}

export default RouteMap;
