'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import Breadcrumbs from './breadcrumbs';
import Logo from './logo';
import Navigation from './navigation';
import styles from './stylesheet';

export default function Header() {
  const { isOnGrandChild, isOnRoot } = useHierarchy();

  return (
    <header className={styles.header(isOnRoot, isOnGrandChild)}>
      <Logo />
      <Breadcrumbs />
      <Navigation />
    </header>
  );
}
