'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

export default function Placeholder({ children }: React.PropsWithChildren) {
  const { isLoading } = useContext(ImageContext);

  if (isLoading) {
    return (
      <div aria-hidden="true" className={styles.placeholder}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
