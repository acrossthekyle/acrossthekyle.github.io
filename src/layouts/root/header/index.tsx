'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const {
    isOnParent,
    isOnRoot,
    routes,
  } = useModel();

  return (
    <header className={styles.header(isOnRoot, isOnParent)}>
      <Link
        className={styles.logo(isOnRoot, isOnParent)}
        href="/"
      >
        <span className={styles.square}>
          <span className={styles.o} />
        </span>
        <span className={styles.username(isOnRoot)}>
          <span className={styles.over}>över</span>
          kyle
        </span>
      </Link>
      <nav className={styles.nav(isOnRoot, isOnParent)}>
        <ul>
          {routes.map((route, index: number) => (
            <li
              className={styles.item}
              key={route.text}
              style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
            >
              <Link
                className={styles.link(
                  isOnRoot,
                  isOnParent,
                  route.isActive,
                )}
                href={route.path}
              >
                {route.text}
                <span className={styles.index}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
