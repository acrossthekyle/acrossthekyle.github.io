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
        aria-hidden={isOpen ? 'false' : 'true'}
        aria-label="gpx"
        aria-modal="true"
        className={styles.gpx(isOpen)}
        id="gpx"
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className="relative h-full w-full" disabled={!isOpen}>
          <button
            aria-controls="gpx"
            aria-label="close gpx"
            className={styles.close}
            onClick={closeGpx}
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <button
            className={styles.view}
            onClick={toggleElevation}
            tabIndex={isOpen ? 1 : -1}
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
