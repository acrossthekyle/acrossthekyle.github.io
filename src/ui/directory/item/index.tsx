'use client';

import { useEffect, useState } from 'react';

import { useLoad } from '@/hooks/useLoad';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  className?: string;
  index: number;
};

export default function DirectoryItem({
  children,
  className = '',
  index,
}: Props) {
  const { path, previous } = useLoad();

  const [canAnimate, setCanAnimate] = useState(true);

  useEffect(() => {
    const isFromChild = previous.includes('/wanderings') || previous.includes('/projects');

    const isFromRootOrParent = ['/', '/about', '/wanderings', '/projects']
      .includes(previous) &&
      ['/wanderings', '/projects'].includes(path) || isFromChild;

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
      className={`${styles.item(canAnimate)} ${className}`.trim()}
      style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
    >
      {children}
    </li>
  );
}
