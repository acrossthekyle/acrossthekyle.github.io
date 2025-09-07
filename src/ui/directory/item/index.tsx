'use client';

import { useEffect, useRef } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

type Props = {
  children: React.ReactNode;
  index: number;
};

export default function DirectoryItem({ children, index }: Props) {
  const { isOnChild } = useHierarchy();

  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      if (isOnChild) {
        ref.current.classList.add('opacity-0', 'animate-in-fade');
      } else {
        ref.current.classList.add('opacity-0', 'animate-elastic-in-from-right');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li
      ref={ref}
      style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
    >
      {children}
    </li>
  );
}
