'use client';

import FocusLock from 'react-focus-lock';

import { useZoom } from '@/hooks/useZoom';

import styles from './stylesheet';

export default function Zoom() {
  const {
    canBlur,
    content,
    isZooming,
    size,
  } = useZoom();

  return (
    <>
      <div className={styles.backdrop(canBlur)} />
      <div
        aria-hidden={isZooming ? 'false' : 'true'}
        aria-label="zoom"
        aria-modal="true"
        className={styles.dialog(isZooming)}
        id="zoom"
        role="dialog"
        style={size ? {
          top: `${size.top}px`,
          left: `${size.left}px`,
          height: size.height,
          width: size.width,
        } : undefined}
        tabIndex={-1}
      >
        <FocusLock className="h-full" disabled={!isZooming}>
          {content}
        </FocusLock>
      </div>
    </>
  );
}
