import Link from 'next/link';

import styles from './stylesheet';
import Theme from './theme';

type Props = {
  route?: string;
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
          <ul className={styles.list}>
            <li>
              <Link
                aria-current={route === 'experiences' ? 'page' : undefined}
                data-active={route === 'experiences'}
                href="/experiences"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                aria-current={route === 'writing' ? 'page' : undefined}
                data-active={route === 'writing'}
                href="/writing"
              >
                Writing
              </Link>
            </li>
            <li>
              <Link
                aria-current={route === 'cv' ? 'page' : undefined}
                data-active={route === 'cv'}
                href="/cv"
              >
                Resume
              </Link>
            </li>
          </ul>
          <Theme />
        </nav>
      </header>
    </>
  );
}
