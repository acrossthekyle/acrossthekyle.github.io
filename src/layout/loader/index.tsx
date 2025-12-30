'use client';

import { useEffect, useState } from 'react';

import Loading from '@/ui/loading';

import styles from './stylesheet';

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (isLoaded) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
}
