'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import FocusLock from 'react-focus-lock';

import { useZoom } from '@/hooks/useZoom';

import styles from './stylesheet';

export default function Zoom() {
  const {
    handleOnLoad,
    isActive,
    isLandscapeOrientation,
    isReady,
    src,
    zoomOut,
  } = useZoom();

  return (
    <>
      <div className={styles.backdrop(isActive)}>
        {!isReady && (
          <span aria-live="polite">Loading Image...</span>
        )}
      </div>
      <div
        aria-hidden={isReady ? 'false' : 'true'}
        aria-label="fullscreen image"
        aria-modal="true"
        className={styles.dialog(isReady)}
        id="zoom"
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className={styles.lock} disabled={!isReady}>
          <button
            aria-controls="zoom"
            aria-label="exit fullscreen"
            className={styles.close}
            onClick={zoomOut}
            type="button"
          >
            <X className={styles.icon} />
          </button>
          {src && (
            <Image
              alt=""
              className={styles.image(isLandscapeOrientation)}
              height={isLandscapeOrientation ? 1080 : 1920}
              onLoad={handleOnLoad}
              sizes="100vw"
              src={src}
              width={isLandscapeOrientation ? 1920 : 1080}
            />
          )}
        </FocusLock>
      </div>
    </>
  );
}
