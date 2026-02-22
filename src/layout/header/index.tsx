import Link from 'next/link';

import Menu from './menu';
import styles from './stylesheet';

type Props = {
  isRoot: boolean;
}

export default function Header({ isRoot }: Props) {
  return (
    <header className={styles.container}>
      <Link
        aria-label="acrossthekyle.com home"
        className={styles.anchor}
        href="/"
      >
        /
      </Link>
      {!isRoot && (
        <Menu />
      )}
    </header>
  );
}
