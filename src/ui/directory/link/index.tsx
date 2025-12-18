'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

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
  const { isOnChild, isOnGrandChild, path, previous } = useHierarchy();

  const isActive = isOnGrandChild ? path.substr(0, path.lastIndexOf('/')) === href : path === href;
  const isExternal = href.includes('https://') || href.includes('mailto:');

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={styles.link(isOnChild, isActive)}
      href={isActive ? (isOnGrandChild ? href : previous) : href}
      ref={isActive ? ref : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
}
