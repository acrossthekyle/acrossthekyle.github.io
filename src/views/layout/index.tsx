'use client';

import { LayoutDashboard, User } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

import Components from './components';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function View({ children }: Props) {
  const { handleOnMenuOpen } = useModel();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link
            className={styles.home}
            href="/"
          >
            <LayoutDashboard className={styles.icon} />
          </Link>
          {/*<button
            className={styles.menu}
            onClick={handleOnMenuOpen}
            type="button"
          >
            {'{'} ACROSS THE KYLE {'}'}
          </button>*/}
          <Suspense>
            <Components.Search />
          </Suspense>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <Components.Modal />
    </>
  );
}
