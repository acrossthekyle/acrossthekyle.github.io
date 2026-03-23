'use client';

import Link from 'next/link';
import { useContext } from 'react';

import { Context } from '@/contexts/hierarchy';

import styles from './stylesheet';

type Props = {
  path: string;
};

export default function Anchor({
  children,
  path,
}: React.PropsWithChildren<Props>) {
  const { isRoot, isParent, isChild, pathname } = useContext(Context);

  const isActive = pathname.startsWith(path);

  return (
    <Link
      className={styles.container(isRoot, isParent, isChild, isActive)}
      href={path}
    >
      {children}
    </Link>
  );
}
