import Link from 'next/link';

import Dialog from './dialog';
import Navigation from './navigation';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  route: string;
};

export default function Header({ route }: Props) {
  return (
    <>
      <header className={styles.container}>
        <Link
          aria-label="acrossthekyle.com home"
          className={styles.anchor}
          href="/"
        >
          K.
        </Link>
        <nav aria-label="main navigation" className={styles.nav}>
          <Navigation className={styles.list} route={route} />
          <Dialog route={route} />
          <Theme />
        </nav>
      </header>
    </>
  );
}
