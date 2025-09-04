'use client';

import FocusLock from 'react-focus-lock';

import { useZoom } from '@/hooks/useZoom';

import styles from './stylesheet';

export default function Zoom() {
  const {
    content,
    isZoomed,
    size,
  } = useZoom();

  return (
    <div
      className={styles.dialog(isZoomed)}
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
      <FocusLock className="h-full" disabled={!isZoomed}>
        {content}
      </FocusLock>
    </div>
  );
}
