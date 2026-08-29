'use client';

import 'leaflet/dist/leaflet.css';

import { useTheme } from 'next-themes';
import {
  MapContainer,
  Polyline,
  TileLayer,
} from 'react-leaflet';

import tw from '@/styles';
import type { Landmark as LandmarkType, Trail } from '@/types';

import Landmark from './landmark';
import { useModel } from './model';
import { parseCoordinates } from './utils';

type Props = {
  center: string;
  landmarks?: LandmarkType[];
  trail?: Trail[];
};

export default function Leaflet({
  center,
  landmarks,
  trail,
}: Props) {
  const { resolvedTheme } = useTheme();

  function Fit() {
    useModel(center, trail, landmarks);

    return null;
  };

  return (
    <MapContainer
      // @ts-expect-error - format is correct
      center={parseCoordinates(center)}
      className={styles.container}
      scrollWheelZoom={false}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      minZoom={4}
      zoom={2}
      zoomControl={false}
      dragging={false}
      boxZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      keyboard={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        key={resolvedTheme}
        noWrap={true}
        url={`https://{s}.basemaps.cartocdn.com/${resolvedTheme}_nolabels/{z}/{x}/{y}{r}.png?key=cb1_2bqa_1_f831d7c3d90199580464a9de`}
      />
      {(landmarks || []).map((landmark, index) => (
        <Landmark key={index} landmark={landmark} />
      ))}
      {(trail || []).map((chunk, index) => (
        <Polyline
          className={styles.route}
          key={index}
          // @ts-expect-error - format is correct
          positions={chunk.map(segment => segment.coordinates)}
        />
      ))}
      <Fit />
    </MapContainer>
  );
};

const styles = tw({
  container: `
    relative z-1
    h-full w-full
    mask-y-from-90% mask-y-to-100%
    grayscale

    sm:mask-none
  `,
  route: `
    !pointer-events-none
    stroke-(--foreground)
  `,
});
