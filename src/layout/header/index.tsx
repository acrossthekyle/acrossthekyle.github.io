import Link from 'next/link';

import Menu from './menu';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  route: string;
};

export default function Header({ route }: Props) {
  return (
    <header className={styles.container}>
      <Link
        aria-label="acrossthekyle.com home"
        href="/"
      >
        <h1 className={styles.heading}>
          Kyle Gilbert
          <small>Backpacker + Engineer</small>
        </h1>
      </Link>
      {route !== 'home' && (
        <Menu />
      )}
      <Theme className={styles.theme(route === 'home')} />
    </header>
  );
}
