'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
};

export default function MenuLink({ children, href, isActive }: Props) {
  const { isOnParent, isOnRoot } = useHierarchy();

  return (
    <Link
      className={styles.link(isOnRoot, isOnParent, isActive)}
      href={href}
    >
      {children}
    </Link>
  );
}
