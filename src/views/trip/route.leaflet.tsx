'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { CornerDownRight, MoveHorizontal, TrendingDown, TrendingUp } from 'lucide-react';
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
  routes: Route[][];
  stages: Stages[];
};

type PopupProps = {
  index: number;
  stage: Stage;
  total: number;
};

function Popup({ index, stage, total }: PopupProps) {
  return (
    <Tooltip opacity={0.8}>
      <div className={styles.popup}>
        <span className={styles.day}>
          {index + 1} / {total}
        </span>
        <h5 className={styles.from}>
          {stage.termini.start}
        </h5>
        <h4 className={styles.to}>
          <CornerDownRight className={styles.icon} /> {stage.termini.end}
        </h4>
        <div className={styles.distance}>
          <MoveHorizontal className={styles.trend} />
          <span>
            {stage.stats.distance.value.imperial}{' '}
            <small className={styles.small}>
              {stage.stats.distance.units.imperial.abbreviated}
            </small>
          </span>
        </div>
        <div className={styles.elevation}>
          <div className={styles.value}>
            <TrendingUp className={styles.trend} />
            {stage.stats.gain.value.imperial}
            <small className={styles.small}>
              {stage.stats.gain.units.imperial.abbreviated}
            </small>
          </div>
          <div className={styles.value}>
            <TrendingDown className={styles.trend} />
            {stage.stats.loss.value.imperial}
            <small className={styles.small}>
              {stage.stats.loss.units.imperial.abbreviated}
            </small>
          </div>
        </div>
      </div>
    </Tooltip>
  );
}

export default function Leaflet({ routes, stages }: Props) {
  const [activeRoute, setActiveRoute] = useState<null | number>(null);
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
          />
        );
      })}
      {all.map((route, index) => {
        return (
          <Fragment key={index}>
            {activeRoute === index && (
              <>
                <CircleMarker
                  center={route[route.length - 1]}
                  className={styles.overlayDot}
                  fillOpacity={1}
                  opacity={1}
                  radius={5}
                />
                <Polyline
                  className={styles.active}
                  positions={route}
                />
              </>
            )}
            <CircleMarker
              center={route[route.length - 1]}
              className={styles.overlay}
              fillOpacity={1}
              opacity={1}
              radius={19}
              eventHandlers={{
                mouseover: () => {
                  setActiveRoute(index);
                },
                mouseout: () => {
                  setActiveRoute(null);
                },
              }}
            >
              <Popup
                index={index}
                stage={stages[index]}
                total={stages.length}
              />
            </CircleMarker>
          </Fragment>
        );
      })}
    </MapContainer>
  );
}
