'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const {
    breadcrumbs,
    current,
    isOnChild,
    isOnParent,
    isOnRoot,
    routes,
  } = useModel();

  return (
    <header className={styles.header(isOnRoot, isOnParent, isOnChild)}>
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
                  isOnChild,
                  current.includes(route.base),
                )}
                href={isOnRoot || current !== route.path ? route.path : '/'}
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
