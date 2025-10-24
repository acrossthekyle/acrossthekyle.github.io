'use client';

import { useEffect, useState } from 'react';

import { useLoad } from '@/hooks/useLoad';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  index: number;
};

export default function DirectoryItem({ children, index }: Props) {
  const { path, previous } = useLoad();

  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    const isFromRootOrParent = ['/', '/about', '/blog', '/contact']
      .includes(previous) &&
      ['/blog', '/contact'].includes(path);

    if (isFromRootOrParent) {
      const timeout = setTimeout(() => {
        setCanAnimate(false);
      }, 750);

      return () => clearTimeout(timeout);
    } else {
      setCanAnimate(false);
    }
  }, [path, previous]);

  return (
    <li
      className={styles.item(canAnimate)}
      style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
    >
      {children}
    </li>
  );
}
