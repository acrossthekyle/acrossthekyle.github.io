'use client';

import { useEffect, useState } from 'react';

import Loading from '@/ui/loading';

import styles from './stylesheet';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      // necessary for next.js applications
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));

      return () => window.removeEventListener('load', () => setIsLoading(false));
    }
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
}
