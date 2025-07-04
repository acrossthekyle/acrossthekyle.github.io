'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';

import { useView } from '@/hooks/useView';
import type { StageGPS } from '@/types';

import Controls from './controls';
import styles from './stylesheet';

const WORLD_ZOOM_LEVEL = 2;

type Props = {
  currentIndex: number;
  gps: StageGPS[];
  onClick: (index: number)=> void;
};

export default function Leaflet({
  currentIndex,
  gps,
  onClick,
}: Props) {
  const [all, setAll] = useState<[number, number][]>([]);
  const [hasAutomaticallyCentered, setHasAutomaticallyCentered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [recentZoom, setRecentZoom] = useState(0);

  const mapRef = useRef<L.Map | null>(null);

  const { view } = useView();

  useEffect(() => {
    if (gps) {
      setAll(
        gps.map(
          (item: StageGPS) => [Number(item.latitude), Number(item.longitude)]
        ),
      );
    }
  }, [gps]);

  useEffect(() => {
    if (mapRef.current && !hasInteracted) {
      const bounds = new L.LatLngBounds([all[currentIndex]]);

      mapRef.current?.fitBounds(bounds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, hasInteracted, mapRef.current]);

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() =>{
        mapRef.current?.invalidateSize();

        if (!hasInteracted) {
          const bounds = new L.LatLngBounds([all[currentIndex]]);

          mapRef.current?.fitBounds(bounds);
        }
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, mapRef.current]);

  function MaxBounds() {
    const map = useMap();

    useEffect(() => {
      map.setMaxBounds([
        [-90, -180],
        [90, 180],
      ]);
    }, [map]);

    return null;
  }

  function AutomaticallyCenterOnInitialLoad({
    route
  }: { route: number[]; }) {
    const map = useMap();

    useEffect(() => {
      if (!hasAutomaticallyCentered) {
        // @ts-expect-error - route is of sufficient size
        const bounds = new L.LatLngBounds([route]);

        map.fitBounds(bounds);

        setHasAutomaticallyCentered(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route]);

    return null;
  }

  function MapControls() {
    const map = useMap();

    const handleOnZoomIn = () => {
      map.zoomIn();

      setHasInteracted(true);
    };

    const handleOnZoomOut = () => {
      map.zoomOut();

      setHasInteracted(true);
    };

    const handleOnViewWorld = () => {
      map.setZoom(WORLD_ZOOM_LEVEL);

      setRecentZoom(WORLD_ZOOM_LEVEL);

      setHasInteracted(true);
    };

    const handleOnAll = () => {
      const bounds = new L.LatLngBounds(all);

      const fit = map.getBoundsZoom(bounds);

      map.fitBounds(bounds);

      setRecentZoom(fit);

      setHasInteracted(true);
    };

    const handleOnFit = () => {
      const bounds = new L.LatLngBounds([all[currentIndex]]);

      const fit = map.getBoundsZoom(bounds);

      map.fitBounds(bounds);

      setRecentZoom(fit);

      setHasInteracted(false);
    };

    return (
      <Controls
        onAll={handleOnAll}
        onFit={handleOnFit}
        onViewWorld={handleOnViewWorld}
        onZoomIn={handleOnZoomIn}
        onZoomOut={handleOnZoomOut}
      />
    );
  }

  function OnZoom() {
    const events = useMapEvents({
      dragend: () => {
        setHasInteracted(true);
      },
      zoomend: () => {
        const zoomLevel = events.getZoom();

        setRecentZoom(zoomLevel);
      },
    });

    return null;
  }

  if (all.length === 0) {
    return null;
  }

  return (
    <MapContainer
      className={styles.map}
      keyboard={false}
      maxBoundsViscosity={1}
      maxZoom={17}
      minZoom={2}
      ref={mapRef}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />
      {recentZoom !== WORLD_ZOOM_LEVEL && all.map((item, index) => {
        return (
          <Fragment key={index}>
            {index !== currentIndex && (
              <>
                <CircleMarker
                  center={item}
                  className={styles.gps}
                  fill={false}
                  opacity={1}
                  weight={1}
                  radius={12}
                  dashArray={[4, 4]}
                  eventHandlers={{
                    click: () => onClick(index),
                  }}
                />
                <CircleMarker
                  center={item}
                  className={styles.gps}
                  fillOpacity={0}
                  opacity={1}
                  radius={6}
                  eventHandlers={{
                    click: () => onClick(index),
                  }}
                />
              </>
            )}
          </Fragment>
        );
      })}
      {recentZoom !== WORLD_ZOOM_LEVEL && all.length > 0 && (
        <>
          <CircleMarker
            center={all[currentIndex]}
            className={styles.active}
            fill={false}
            opacity={1}
            weight={1}
            radius={12}
            dashArray={[4, 4]}
          />
          <CircleMarker
            center={all[currentIndex]}
            className={styles.active}
            fillOpacity={0}
            opacity={1}
            radius={6}
          />
        </>
      )}
      {recentZoom === WORLD_ZOOM_LEVEL && (
        <>
          <CircleMarker
            center={all[0]}
            className={styles.gps}
            fill={false}
            color="rgba(255, 255, 255, 0.5)"
            opacity={1}
            weight={1}
            radius={8}
          />
          <CircleMarker
            center={all[0]}
            className={styles.gps}
            fillColor="white"
            fillOpacity={1}
            color="white"
            opacity={1}
            weight={2}
            radius={2}
          />
        </>
      )}
      <MaxBounds />
      <OnZoom />
      <MapControls />
      <AutomaticallyCenterOnInitialLoad route={all[currentIndex]} />
    </MapContainer>
  );
}
