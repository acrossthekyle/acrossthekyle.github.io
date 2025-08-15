import { ReactNode } from 'react';

import Header from './header';
import Modal from './modal';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <span className={styles.copy}>
          &copy; '87 - {new Date().getFullYear()}
        </span>
      </footer>
      <Modal />
    </>
  );
}
