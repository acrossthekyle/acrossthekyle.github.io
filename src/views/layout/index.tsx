'use client';

import { AlignLeft } from 'lucide-react';
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
          <button
            className={styles.menu}
            onClick={handleOnMenuOpen}
            type="button"
          >
            <AlignLeft className={styles.icon} />
          </button>
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
