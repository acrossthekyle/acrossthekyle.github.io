'use client';

import FocusLock from 'react-focus-lock';

import { useZoom } from '@/hooks/useZoom';

import styles from './stylesheet';

export default function Zoom() {
  const {
    canBlur,
    caption,
    content,
    isLandscapeOrientation,
    isZoomed,
    isZooming,
    size,
  } = useZoom();

  return (
    <>
      <div className={styles.backdrop(canBlur)} />
      <div
        className={styles.dialog(isZooming)}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={size ? {
          top: `${size.top}px`,
          left: `${size.left}px`,
          height: size.height,
          width: size.width,
        } : undefined}
      >
        <FocusLock className="h-full" disabled={!isZooming}>
          {content}
          {!!caption && (
            <div className={styles.caption(isLandscapeOrientation, isZoomed)}>
              {caption}
            </div>
          )}
        </FocusLock>
      </div>
    </>
  );
}
