'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';

import { useView } from '../hooks';

import Controls from './controls';
import styles from './stylesheet';

const WORLD_ZOOM_LEVEL = 2;

function mapPinIcon() {
  return L.divIcon({
    className: '',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fde047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
    iconSize: [30, 30],
    iconAnchor: [14, 24],
  });
};

type Props = {
  currentIndex: number;
  onClick: (index: number)=> void;
  routes: [number, number][][];
};

export default function RouteMap({
  currentIndex,
  onClick,
  routes,
}: Props) {
  const [all, setAll] = useState<[number, number][][]>([]);
  const [hasAutomaticallyCentered, setHasAutomaticallyCentered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [recentZoom, setRecentZoom] = useState(0);

  const mapRef = useRef<L.Map | null>(null);

  const { view } = useView();

  useEffect(() => {
    if (routes) {
      setAll(routes);
    }
  }, [routes]);

  useEffect(() => {
    if (mapRef.current && !hasInteracted) {
      const bounds = new L.LatLngBounds(all[currentIndex]);

      mapRef.current?.fitBounds(bounds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, hasInteracted, mapRef.current]);

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() =>{
        mapRef.current?.invalidateSize();

        if (!hasInteracted) {
          const bounds = new L.LatLngBounds(all[currentIndex]);

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
  }: { route: [number, number][] }) {
    const map = useMap();

    useEffect(() => {
      if (route.length > 0 && !hasAutomaticallyCentered) {
        const bounds = new L.LatLngBounds(route);

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
      // @ts-expect-error - all is of sufficient size
      const bounds = new L.LatLngBounds(all);

      const fit = map.getBoundsZoom(bounds);

      map.fitBounds(bounds);

      setRecentZoom(fit);

      setHasInteracted(true);
    };

    const handleOnFit = () => {
      const bounds = new L.LatLngBounds(all[currentIndex]);

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
      doubleClickZoom={false}
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
      {recentZoom !== WORLD_ZOOM_LEVEL && all.map((route, index) => {
        return (
          <Fragment key={index}>
            {index !== currentIndex && (
              <>
                <Polyline
                  className={styles.routes}
                  positions={route}
                />
                <Polyline
                  className={`z-9999`}
                  opacity={0}
                  positions={route}
                  weight={15}
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
          <Polyline
            className={styles.glow}
            interactive={false}
            positions={all[currentIndex]}
            smoothFactor={0}
          />
          <Polyline
            className={styles.current}
            interactive={false}
            positions={all[currentIndex]}
            smoothFactor={0}
          />
        </>
      )}
      {recentZoom !== WORLD_ZOOM_LEVEL && all.length > 0 && (
        <>
          <CircleMarker
            center={all[currentIndex][0]}
            className={styles.circle}
            fill={false}
            opacity={1}
            weight={1}
            radius={8}
            dashArray={[4, 4]}
          />
          <CircleMarker
            center={all[currentIndex][0]}
            className={styles.circle}
            fillOpacity={1}
            opacity={1}
            radius={2}
          />
          <Marker
            position={all[currentIndex][all[currentIndex].length - 1]}
            icon={mapPinIcon()}
          />
        </>
      )}
      {recentZoom === WORLD_ZOOM_LEVEL && (
        <>
          <CircleMarker
            center={all[currentIndex][all[currentIndex].length - 1]}
            className={styles.circle}
            fill={false}
            color="rgba(255, 255, 255, 0.5)"
            opacity={1}
            weight={1}
            radius={8}
          />
          <CircleMarker
            center={all[currentIndex][all[currentIndex].length - 1]}
            className={styles.circle}
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
      <AutomaticallyCenterOnInitialLoad
        route={all[currentIndex]}
      />
      <svg className={styles.blur}>
        <defs>
          <filter id="glow-filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur-effect"
            />
            <feMerge>
              <feMergeNode in="blur-effect" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </MapContainer>
  );
}
