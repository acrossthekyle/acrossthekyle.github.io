'use client';

import { useContext } from 'react';

import { ImageContext } from '../context';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  index?: number;
};

export default function Placeholder({ children, className, index }: Props) {
  const { isLoading } = useContext(ImageContext);

  if (isLoading) {
    return (
      <div
        aria-hidden="true"
        className={`${styles.placeholder(isLoading, index)} ${className}`}
      >
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
