import Link from 'next/link';

import Menu from './menu';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  isRoot?: boolean;
}

export default function Header({ isRoot }: Props) {
  return (
    <header>
      <Link aria-label="acrossthekyle.com home" href="/">
        K.
      </Link>
      {!isRoot && (
        <Menu />
      )}
      <Theme className={styles.theme} />
    </header>
  );
}
