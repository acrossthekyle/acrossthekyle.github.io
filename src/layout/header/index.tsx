import Link from 'next/link';

import styles from './stylesheet';
import Theme from './theme';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  route?: string;
};

export default function Header({ children, route }: Props) {
  return (
    <header className={styles.container}>
      <nav aria-label="main navigation" className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <Link
              aria-current={route === '/' ? 'page' : undefined}
              aria-label="acrossthekyle.com home"
              className={styles.link}
              data-active={route !== 'cv'}
              href="/"
            >
              Wanderings
            </Link>
          </li>
          <li>
            <Link
              aria-current={route === 'cv' ? 'page' : undefined}
              aria-label="view cv/resume"
              className={styles.link}
              data-active={route === 'cv'}
              href="/cv"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              aria-label="send email"
              className={styles.link}
              data-mono="true"
              href="mailto:hello@acrossthekyle.com"
            >
              Say Hi
            </Link>
          </li>
        </ul>
      </nav>
      <Theme />
      <div className={styles.scrollable} />
      {children}
    </header>
  );
}
