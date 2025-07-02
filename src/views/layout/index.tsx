'use client';

import { AlignRight } from 'lucide-react';
import { ReactNode, Suspense } from 'react';

import Modal from './modal';
import { useModel } from './model';
import Search from './search';
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
          <Suspense>
            <Search />
          </Suspense>
          <button
            className={styles.menu}
            onClick={handleOnMenuOpen}
            type="button"
          >
            <AlignRight className={styles.icon} />
          </button>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <Modal />
    </>
  );
}
