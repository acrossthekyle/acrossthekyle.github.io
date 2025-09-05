'use client';

import { Maximize, Minimize } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

export default function Footer() {
  const { handleOnToggle, isFullscreen, isFullscreenSupported, isOnRoot } = useModel();

  return (
    <footer className={styles.footer}>
      {isFullscreenSupported && (
        <button
          className={styles.toggle(isOnRoot)}
          onClick={handleOnToggle}
          type="button"
        >
          {isFullscreen ? (
            <Minimize />
          ) : (
            <Maximize />
          )}
        </button>
      )}
      <span className={styles.copy}>
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
