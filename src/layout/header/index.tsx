'use client';

import { TextAlignEnd } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

import Heading from './heading';
import Navigation from './navigation';
import styles from './stylesheet';

export default function Header() {
  const { isOnGrandChild, isOnRoot, path } = useHierarchy();

  const [shouldPush, setShouldPush] = useState(false);

  useEffect(() => {
    if (shouldPush) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
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
      <div className={styles.upper}>
        <Heading />
        {!isOnRoot && (
          <button
            aria-controls="menu"
            aria-expanded={shouldPush ? 'true' : 'false'}
            aria-label="open menu"
            className={styles.toggle}
            onClick={handleOnToggle}
            type="button"
          >
            <TextAlignEnd className={styles.icon} />
          </button>
        )}
      </div>
      <Navigation onToggle={handleOnToggle} shouldPush={shouldPush} />
    </header>
  );
}
