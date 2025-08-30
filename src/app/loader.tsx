'use client';

import { useEffect, useState } from 'react';

import styles from './stylesheet';

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.loader(isLoaded)}>
      <p className={styles.message(isLoaded)}>
        <span className={styles.one}>
          Loading...
        </span>
        <span className={styles.two}>
          almost there...
        </span>
        <span className={styles.three}>
          any second now...
        </span>
      </p>
    </div>
  );
}
