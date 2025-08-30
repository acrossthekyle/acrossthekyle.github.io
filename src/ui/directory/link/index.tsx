'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import { useScroll } from './hooks';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  href: string;
  ref?: React.RefObject<HTMLAnchorElement | null>;
};

export default function DirectoryLink({
  children,
  href,
  ref,
}: Props) {
  const { isOnChild, path, previous } = useHierarchy();

  const isActive = path === href;
  const isExternal = href.includes('https://') || href.includes('mailto:');

  useScroll(isActive ? ref : undefined);

  return (
    <Link
      className={styles.link(isOnChild, isActive)}
      href={isOnChild && isActive ? previous : href}
      ref={isActive ? ref : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
}
