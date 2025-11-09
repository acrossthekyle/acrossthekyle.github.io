'use client';

import { TextAlignJustify, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';

import { routes } from '@/constants';
import { useHierarchy } from '@/hooks/useHierarchy';
import { useLoad } from '@/hooks/useLoad';
import { padIndex } from '@/utils';

import { useModel } from './model';
import Search from './search';
import styles from './stylesheet';
import Theme from './theme';
import { getRoutePath } from './utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const { isFirstLoad } = useLoad();

  const {
    isOnChild,
    isOnRoot,
    isOnParent,
    path,
  } = useHierarchy();

  const { isMobile } = useModel();

  const handleOnMenuToggle = () => {
    setIsOpen((previous: boolean) => {
      const main = document.querySelector('main');

      if (!previous) {
        document.documentElement.classList.add('overflow-hidden');

        if (main) {
          main.classList.add('overflow-hidden');
        }
      } else {
        document.documentElement.classList.remove('overflow-hidden');

        if (main) {
          main.classList.remove('overflow-hidden');
        }
      }

      return !previous;
    });
  };

  const handleOnClick = (base: string) => {
    if (path.includes(base)) {
      handleOnMenuToggle();
    }
  };

  useEffect(() => {
    if (isOpen) {
      handleOnMenuToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const paths = routes.map((route) => ({
    ...route,
    isActive: path.includes(route.base),
    path: isOpen ? route.base : getRoutePath(
      isOnRoot,
      route.base,
      path,
    ),
  }));

  return (
    <>
      <button
        aria-controls="menu"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="open menu"
        className={styles.toggle(isOnRoot)}
        onClick={handleOnMenuToggle}
        type="button"
      >
        <TextAlignJustify />
      </button>
      <nav
        aria-hidden={isMobile ? (isOpen ? 'false' : 'true') : 'false'}
        aria-label="main navigation"
        className={styles.container(isOnRoot, isOnParent, isOpen)}
        id="menu"
        inert={isMobile && !isOnRoot ? (isOpen ? false : true) : false}
        role={isMobile ? 'dialog' : 'none'}
        tabIndex={-1}
      >
        <FocusLock
          className={styles.wrapper}
          disabled={!isOpen}
        >
          <h2 className={styles.heading(isOnRoot, isOpen)}>Menu</h2>
          <button
            aria-label="close menu"
            aria-controls="menu"
            className={styles.close(isOpen)}
            onClick={handleOnMenuToggle}
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <Search isMenuActive={isOpen} />
          <Theme isMenuActive={isOpen} />
          <ul className={styles.list}>
            {paths.map(({ base, isActive, label, path, text }, index: number) => (
              <li
                className={styles.item(isFirstLoad, isOnRoot)}
                key={index}
                style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
              >
                <Link
                  aria-label={label}
                  className={styles.link(isOnRoot, isOnParent, isActive, isOpen)}
                  href={path}
                  onClick={() => handleOnClick(base)}
                >
                  <span className={styles.block}>
                    {text}
                    <span className={styles.index(isOnChild)}>
                      {padIndex(index + 1)}
                    </span>
                  </span>
                </Link>
                <span className={styles.info}>
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </FocusLock>
      </nav>
    </>
  );
}
