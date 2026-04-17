'use client';

import { useContext } from 'react';

import { Map, MapMarker } from '@/ui/map';

import { TrailContext } from '../context';
import type { Trail } from '../types';

import styles from './stylesheet';

type Props = {
  trails: Trail[];
};

function getData(trails: Trail[], id: string | null) {
  if (id === null) {
    return null;
  }

  return trails.find((trail) => trail.id === id) || null;
}

export default function Aside({ trails }: Props) {
  const { id } = useContext(TrailContext);

  const data = getData(trails, id);

  return (
    <div className={styles.container} role="presentation">
      <Map className={styles.map}>
        {trails.map((trail) => (
          <MapMarker
            key={trail.id}
            position={{
              left: trail.position[1],
              top: trail.position[0],
            }}
          />
        ))}
        {data !== null && (
          <MapMarker
            highlight
            position={{
              left: data.position[1],
              top: data.position[0],
            }}
          />
        )}
      </Map>
    </div>
  );
}
