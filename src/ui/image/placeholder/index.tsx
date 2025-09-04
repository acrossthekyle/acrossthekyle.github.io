'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Placeholder({ children, className }: Props) {
  const { isLoading } = useContext(ImageContext);

  if (isLoading) {
    return (
      <div className={`${styles.placeholder(isLoading)} ${className}`}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
