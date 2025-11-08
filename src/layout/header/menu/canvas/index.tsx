'use client';

import { TextAlignJustify, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';

import { useHierarchy } from '@/hooks/useHierarchy';
import { useLoad } from '@/hooks/useLoad';
import { useTheme } from '@/hooks/useTheme';

import { routes } from '../../constants';

import styles from './stylesheet';

export default function Canvas() {
  const [isOpen, setIsOpen] = useState(false);

  const { isOnRoot } = useHierarchy();

  const { path } = useLoad();

  const { onToggleTheme } = useTheme();

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

  if (isOnRoot) {
    return null;
  }

  return (
    <>
      <button
        aria-controls="menu"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="open menu"
        className={styles.toggle}
        onClick={handleOnMenuToggle}
        type="button"
      >
        <TextAlignJustify />
      </button>
      <nav
        aria-hidden="true"
        aria-label="main navigation off-screen"
        className={styles.canvas(isOpen)}
        id="menu"
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock
          className={styles.wrapper}
          disabled={!isOpen}
        >
          <h2 className={styles.heading}>Menu</h2>
          <button
            aria-label="close menu"
            aria-controls="menu"
            className={styles.close}
            onClick={handleOnMenuToggle}
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <button
            aria-live="polite"
            className={styles.theme}
            onClick={onToggleTheme}
            title="Toggle light &amp; dark theme"
            type="button"
          >
            <Sun className={styles.sun} />
            <Moon className={styles.moon} />
          </button>
          <ul className={styles.list}>
            {routes.map((route) => (
              <li className={styles.item} key={route.base}>
                <Link
                  className={styles.link}
                  href={route.base}
                  onClick={() => handleOnClick(route.base)}
                >
                  {route.text}
                </Link>
              </li>
            ))}
          </ul>
        </FocusLock>
      </nav>
    </>
  );
}
