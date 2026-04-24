'use client';

import { useState, useEffect } from 'react';

import styles from './stylesheet';

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsVisible(false), 2000);
    const removeTimer = setTimeout(() => setIsRendered(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-busy="true"
      className={styles.container(isVisible)}
    >
      <div className={styles.content}>
        <h1 className={styles.header}>
          Kyle
        </h1>
        <p className={styles.paragraph}>
          A collection of my hikes, summits, and experiences
        </p>
      </div>
    </div>
  );
}
