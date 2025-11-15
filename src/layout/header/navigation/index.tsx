'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import FocusLock from 'react-focus-lock';

import { routes } from '@/constants';
import { useHierarchy } from '@/hooks/useHierarchy';
import { useLoad } from '@/hooks/useLoad';
import { padIndex } from '@/utils';

import { useModel } from './model';
import styles from './stylesheet';
import Theme from './theme';
import { getRoutePath } from './utils';

type Props = {
  onToggle: () => void;
  shouldPush: boolean;
};

export default function Navigation({ onToggle, shouldPush }: Props) {
  const { isFirstLoad } = useLoad();

  const {
    isOnChild,
    isOnRoot,
    isOnParent,
    path,
  } = useHierarchy();

  const { isMobile } = useModel();

  const handleOnClick = (base: string) => {
    if (path.includes(base) && isMobile) {
      onToggle();
    }
  };

  const links = routes.map((route) => ({
    ...route,
    isActive: path.includes(route.base),
    path: shouldPush ? route.base : getRoutePath(
      isOnRoot,
      route.base,
      path,
    ),
  }));

  return (
    <nav
      aria-label="main navigation"
      className={styles.container(isOnRoot, shouldPush)}
      id="menu"
      inert={isMobile && !isOnRoot ? (shouldPush ? false : true) : false}
      role={isMobile ? 'dialog' : 'none'}
      tabIndex={-1}
    >
      <FocusLock
        className={styles.wrapper}
        disabled={!shouldPush}
      >
        {!isOnRoot && (
          <button
            aria-label="close menu"
            aria-controls="menu"
            className={styles.close}
            onClick={onToggle}
            type="button"
          >
            <X className={styles.icon} />
          </button>
        )}
        <Theme isMenuActive={shouldPush} />
        <ul className={styles.list}>
          {links.map((link, index: number) => (
            <li
              className={styles.item(isFirstLoad, isOnRoot)}
              key={index}
              style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
            >
              <Link
                aria-label={link.label}
                className={
                  styles.link(isOnRoot, isOnParent, link.isActive, shouldPush)
                }
                href={link.path}
                onClick={() => handleOnClick(link.base)}
              >
                <span className={styles.block}>
                  {link.text}
                  <span className={styles.index(isOnChild)}>
                    {padIndex(index + 1)}
                  </span>
                </span>
              </Link>
              <span className={styles.info}>
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </FocusLock>
    </nav>
  );
}
