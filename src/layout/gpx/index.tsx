'use client';

import { TrendingUp, X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import { useGpx } from '@/hooks/useGpx';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import styles from './stylesheet';

export default function Gpx() {
  const {
    canRenderElevation,
    closeGpx,
    gpx,
    isOpen,
    termini,
    toggleElevation,
  } = useGpx();

  return (
    <>
      <div className={styles.backdrop(isOpen)} />
      <div
        aria-modal="true"
        className={styles.gpx(isOpen)}
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className="relative h-full w-full" disabled={!isOpen}>
          <button
            className={styles.close}
            onClick={closeGpx}
            title="Close"
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <button
            className={styles.view}
            onClick={toggleElevation}
            title="View elevation chart"
            type="button"
          >
            <TrendingUp className={styles.icon} />
          </button>
          <Context>
            <Route
              gpx={gpx}
              shouldShrink={canRenderElevation}
              termini={termini}
            />
            <Elevation gpx={gpx} shouldGrow={canRenderElevation} />
          </Context>
        </FocusLock>
      </div>
    </>
  );
}
