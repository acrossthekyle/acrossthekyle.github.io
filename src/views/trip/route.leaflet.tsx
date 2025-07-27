'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MoveRight } from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polyline,
  Tooltip,
} from 'react-leaflet';

import type { Route, Stage } from '@/types';

import styles from './map.stylesheet';

type Props = {
  isLoop: boolean;
  routes: Route[][];
  stages: Stages[];
};

export default function Leaflet({ isLoop, routes, stages }: Props) {
  const [all, setAll] = useState<Route[][]>([]);

  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (routes) {
      setAll(routes);
    }
  }, [routes]);

  useEffect(() => {
    if (mapRef.current && all.length > 0) {
      const bounds = new L.LatLngBounds(all);

      mapRef.current?.fitBounds(bounds);
      mapRef.current?.dragging.disable();
      mapRef.current?.doubleClickZoom.disable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [all, mapRef.current]);

  const first = routes[0];

  return (
    <MapContainer
      className={styles.map}
      id="all-routes"
      keyboard={false}
      maxBoundsViscosity={1}
      maxZoom={17}
      minZoom={2}
      ref={mapRef}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      {all.map((route, index) => {
        return (
          <Fragment key={index}>
            <CircleMarker
              center={route[route.length - 1]}
              className={styles.outer}
              fillOpacity={1}
              opacity={1}
              radius={19}
            />
            <CircleMarker
              center={route[route.length - 1]}
              className={styles.inner}
              fillOpacity={1}
              opacity={1}
              radius={12}
            />
          </Fragment>
        );
      })}
      {!isLoop && (
        <>
          <CircleMarker
            center={first[0]}
            className={styles.outer}
            fillOpacity={1}
            opacity={1}
            radius={19}
          />
          <CircleMarker
            center={first[0]}
            className={styles.inner}
            fillOpacity={1}
            opacity={1}
            radius={12}
          />
        </>
      )}
      {all.map((route, index) => {
        return (
          <Polyline
            className={styles.routes}
            key={index}
            positions={route}
          />
        );
      })}
      {all.map((route, index) => {
        return (
          <CircleMarker
            center={route[route.length - 1]}
            className={styles.dot}
            fillOpacity={1}
            key={index}
            opacity={1}
            radius={5}
          >
            <Tooltip opacity={1}>
              <div className={styles.popup}>
                <span className={styles.day}>
                  Day {index + 1}
                </span>
                <h5 className={styles.from}>
                  {stages[index].termini.start}
                  <MoveRight className={styles.icon} />
                </h5>
                <h4 className={styles.to}>
                  {stages[index].termini.end}
                </h4>
                <ul className={styles.stats}>
                  <li className={styles.stat}>
                    <span>Distance</span>
                    <span className={styles.units}>
                      {stages[index].stats.distance.value} {stages[index].stats.distance.units}
                    </span>
                  </li>
                  <li className={styles.stat}>
                    <span>Duration</span>
                    <span className={styles.units}>
                      {stages[index].stats.time.value} {stages[index].stats.time.units}
                    </span>
                  </li>
                  <li className={styles.stat}>
                    <span>Gain</span>
                    <span className={styles.units}>
                      {stages[index].stats.gain.value} {stages[index].stats.gain.units}
                    </span>
                  </li>
                  <li className={styles.stat}>
                    <span>Loss</span>
                    <span className={styles.units}>
                      {stages[index].stats.loss.value} {stages[index].stats.loss.units}
                    </span>
                  </li>
                </ul>
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
      {!isLoop && (
        <CircleMarker
          center={first[0]}
          className={styles.dot}
          fillOpacity={1}
          opacity={1}
          radius={5}
        >
          <Tooltip>
            <div className={styles.popup}>
              <h5 className={styles.from}>
                Point of Departure
              </h5>
              <h4 className={styles.to}>
                {stages[0].termini.start}
              </h4>
            </div>
          </Tooltip>
        </CircleMarker>
      )}
    </MapContainer>
  );
}
