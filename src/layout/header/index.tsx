import Link from 'next/link';

import Theme from '@/ui/theme';

import styles from './stylesheet';

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
          Kyle
        </Link>
        <nav aria-label="main navigation" className={styles.nav}>
          <ul>
            <li className="inline mr-4">
              <Link
                aria-current={route === 'wanderings' ? 'page' : undefined}
                data-active={route === 'wanderings'}
                href="/wanderings"
              >
                Wanderings
              </Link>
            </li>
            <li className="inline">
              <Link
                aria-current={route === 'cv' ? 'page' : undefined}
                data-active={route === 'cv'}
                href="/cv"
              >
                CV / Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Theme />
    </>
  );
}
