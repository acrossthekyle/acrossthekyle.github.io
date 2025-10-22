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
        Great<br />
        Work<br />
        Takes<br />
        Time
        <span className={styles.one}>.</span>
        <span className={styles.two}>.</span>
        <span className={styles.three}>.</span>
      </p>
    </div>
  );
}
