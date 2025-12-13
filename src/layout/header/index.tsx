'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

import Breadcrumbs from './breadcrumbs';
import Logo from './logo';
import Navigation from './navigation';
import styles from './stylesheet';

export default function Header() {
  const { isOnGrandChild, isOnRoot, path } = useHierarchy();

  const [shouldPush, setShouldPush] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');

    if (shouldPush) {
      document.documentElement.classList.add('overflow-hidden');

      if (main) {
        main.classList.add('translate-y-[100vh]');
        main.classList.add('overflow-hidden');
      }
    } else {
      document.documentElement.classList.remove('overflow-hidden');

      if (main) {
        main.classList.remove('overflow-hidden');

        setTimeout(() => {
          main.classList.remove('translate-y-[100vh]');
        }, 300);
      }
    }
  }, [shouldPush]);

  useEffect(() => {
    if (shouldPush) {
      handleOnToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const handleOnToggle = () => {
    window.scrollTo(0, 0);

    setShouldPush((previous: boolean) => !previous);
  };

  return (
    <header className={styles.container(isOnRoot, isOnGrandChild)}>
      <div className={styles.upper(shouldPush)}>
        <Breadcrumbs />
        {!isOnRoot && (
          <button
            aria-controls="menu"
            aria-expanded={shouldPush ? 'true' : 'false'}
            aria-label="open menu"
            className={styles.toggle}
            onClick={handleOnToggle}
            type="button"
          >
            <Menu className={styles.icon} />
          </button>
        )}
      </div>
      <Navigation onToggle={handleOnToggle} shouldPush={shouldPush} />
    </header>
  );
}
