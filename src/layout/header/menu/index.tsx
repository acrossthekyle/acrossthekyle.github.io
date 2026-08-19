'use client';

import { useEffect, useState } from 'react';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';

import tw from '@/styles';
import type { Collection } from '@/types';

import Header from './header';
import Latest from './latest';
import Search from './search';
import Trigger from './trigger';

type Props = {
  collections: Collection[];
};

export default function Menu({ collections }: Props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);

  const handleToggle = () => {
    setIsActive((previous) => !previous)
  };

  return (
    <FocusLock disabled={!isActive}>
      <AutoFocusInside>
        <Trigger isActive={isActive} onClick={handleToggle} />
      </AutoFocusInside>
      <div
        className={styles.backdrop(isActive)}
        onClick={handleToggle}
        role="presentation"
      />
      <div className={styles.container(isActive)}>
        <Header />
        <Search collections={collections} onClick={handleToggle} />
        <Latest latest={collections[0]} onClick={handleToggle} />
      </div>
    </FocusLock>
  );
};

const styles = tw({
  backdrop: (isActive: boolean) => tw(`
    fixed inset-0
    bg-(--background)

    motion-safe:duration-300

    ${isActive ? 'opacity-100 z-40' : 'opacity-0 -z-1'}

    sm:bg-(--background)/90
  `),
  container: (isActive: boolean) => tw(`
    absolute left-0 top-0 bottom-0 z-50
    flex flex-col
    w-full min-h-svh
    overflow-y-auto
    bg-(--background)
    border-r border-current/5

    motion-safe:duration-300

    ${isActive ? 'translate-x-0' : `
      -translate-x-full invisible transition-[visibility]
    `}

    sm:w-[50svw]
    lg:w-[33.333333svw]
  `),
});
