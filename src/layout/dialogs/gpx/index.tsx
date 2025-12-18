'use client';

import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import { useGpx } from '@/hooks/useGpx';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import Stats from './stats';
import styles from './stylesheet';

export default function Gpx() {
  const {
    closeGpx,
    gpx,
    isOpen,
    stats,
    termini,
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
        <FocusLock className={styles.container} disabled={!isOpen}>
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
          <Context>
            <div className={styles.content}>
              <Stats gpx={gpx} stats={stats} termini={termini} />
              <Elevation gpx={gpx} />
            </div>
            <Route gpx={gpx} termini={termini} />
          </Context>
        </FocusLock>
      </div>
    </>
  );
}
