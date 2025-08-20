'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const {
    breadcrumbs,
    isOnParent,
    isOnRoot,
    routes,
  } = useModel();

  return (
    <header className={styles.header(isOnRoot, isOnParent)}>
      <div className={styles.breadcrumbs(isOnRoot, isOnParent)}>
        {breadcrumbs.map((breadcrumb) => (
          <Link
            className={styles.breadcrumb}
            href={breadcrumb.path}
            key={breadcrumb.name}
          >
            <span className="font-mono">/</span>{' '}
            {breadcrumb.name}
          </Link>
        ))}
      </div>
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
