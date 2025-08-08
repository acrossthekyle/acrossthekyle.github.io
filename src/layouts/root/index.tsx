'use client';

import { Maximize, Minimize } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import Modal from './modal';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const {
    handleOnFullscreen,
    isFullscreen,
    isOnRoot,
    isOnTrip,
    route,
  } = useModel();

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link className={styles.home} href="/">
            K
          </Link>
        </h1>
      </header>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.item}>
              <Link
                className={styles.link(isOnRoot, isOnTrip, route.includes('/trips'))}
                href={
                  isOnRoot ? '/trips' : (route === '/trips' ? '/' : '/trips')
                }
              >
                Trips
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link(isOnRoot, isOnTrip, route === '/about')}
                href={
                  isOnRoot ? '/about' : (route === '/about' ? '/' : '/about')
                }
              >
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link(isOnRoot, isOnTrip, route === '/contact')}
                href={
                  isOnRoot ? '/contact' : (route === '/contact' ? '/' : '/contact')
                }
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
            <Maximize className={styles.icon} />
          )}
        </button>
      </footer>
      <Modal />
    </>
  );
}
