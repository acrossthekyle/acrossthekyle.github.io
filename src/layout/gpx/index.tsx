'use client';

import { X } from 'lucide-react';
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
    elevation,
    isOpen,
    route,
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
        <FocusLock className="h-full" disabled={!isOpen}>
          <button
            className={styles.close}
            onClick={closeGpx}
            title="Close"
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <button
            className={styles.view(canRenderElevation)}
            onClick={toggleElevation}
            type="button"
          >
            {canRenderElevation ? 'Hide' : 'Show'} elevation
          </button>
          <Context>
            <Route
              route={route}
              shouldShrink={canRenderElevation}
              termini={termini}
            />
            {canRenderElevation && (
              <Elevation elevation={elevation} />
            )}
          </Context>
        </FocusLock>
      </div>
    </>
  );
}
