import { ReactNode, Suspense } from 'react';

import Header from './header';
import Zoom from './zoom';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Suspense>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
      </Suspense>
      <footer className={styles.footer}>
        <span className={styles.copy}>
          &copy; 1987 - {new Date().getFullYear()}
        </span>
      </footer>
      <Zoom />
    </>
  );
}
