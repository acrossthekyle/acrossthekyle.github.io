'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  href: string;
  lines?: number;
  ref?: React.RefObject<HTMLAnchorElement | null>;
};

export default function DirectoryLink({
  children,
  href,
  lines = 1,
  ref,
}: Props) {
  const { isOnChild, isOnGrandChild, path, previous } = useHierarchy();

  const [inViewRef, inView] = useInView({
    threshold: .65,
  });

  const isActive = isOnGrandChild ? path.includes(href) : path === href;
  const isExternal = href.includes('https://') || href.includes('mailto:');

  return (
    <Link
      className={styles.link(isOnChild, isActive, inView, lines)}
      href={isActive ? (isOnGrandChild ? href : previous) : href}
      ref={isActive ? ref : inViewRef}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
}
