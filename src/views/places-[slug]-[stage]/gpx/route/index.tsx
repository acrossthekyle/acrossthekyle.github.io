'use client';

import { Minus, Plus } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useContext, useState } from 'react';

import type { Gpx } from '@/types';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  gpx: Gpx;
};

export default function Route({ gpx }: Props) {
  const { hoverIndex } = useContext(GpxContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnToggle = () => {
    setIsExpanded(previous => !previous);
  };

  if (gpx.length === 0) {
    return null;
  }

  return (
    <div className={styles.container(isExpanded)}>
      <button className={styles.toggle} onClick={handleOnToggle} type="button">
        Route
        {isExpanded ? (
          <Minus className={styles.icon} />
        ) : (
          <Plus className={styles.icon} />
        )}
      </button>
      <Plugin gpx={gpx} hoverIndex={hoverIndex} />
    </div>
  );
}
