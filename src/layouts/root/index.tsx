'use client';

import { Fullscreen, Minimize } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { handleOnFullscreen, isFullscreen, isOnRoot, isOnTrip, route } = useModel();

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.home} href="/">
          K<span className={styles.yle(isOnRoot)}>YLE</span>
        </Link>
      </header>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.item}>
              <Link
                className={styles.link(isOnRoot, isOnTrip, route.includes('/trips'))}
                href={isOnRoot ? '/trips' : '/'}
              >
                Destinations
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link(isOnRoot, isOnTrip, route === '/about')}
                href={isOnRoot ? '/about' : '/'}
              >
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link(isOnRoot, isOnTrip, route === '/contact')}
                href={isOnRoot ? '/contact' : '/'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </main>
      <footer className={styles.footer(isOnTrip)}>
        <button
          className={styles.fullscreen}
          onClick={handleOnFullscreen}
          type="button"
        >
          {isFullscreen ? (
            <Minimize className={styles.icon} />
          ) : (
            <Fullscreen className={styles.icon} />
          )}
        </button>
      </footer>
    </>
  );
}
