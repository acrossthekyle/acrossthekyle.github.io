'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import tw from '@/styles';
import type { Collection } from '@/types';

import Menu from './menu';

type Props = {
  collections: Collection[];
};

export default function Header({ collections }: Props) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuActive]);

  const handleMenuToggle = () => {
    setIsMenuActive((previous) => !previous)
  };

  return (
    <>
      <header className={styles.container}>
        <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
          <span className={styles.inner}>
            @acrossthekyle
          </span>
        </Link>
        <span className={styles.version}>
          v0.1701.D
        </span>
        {/*<Menu
          collections={collections}
          isActive={isMenuActive}
          onToggle={handleMenuToggle}
        />*/}
      </header>
      <div
        className={styles.backdrop(isMenuActive)}
        onClick={handleMenuToggle}
        role="presentation"
      />
    </>
  );
};

const styles = tw({
  container: `
    absolute top-0 left-0
    w-full
    flex items-center
    p-4

    sm:w-1/2
    lg:w-1/3
  `,
  anchor: `
    p-2 pt-1
  `,
  inner: `
    px-1 pt-0.5 pb-0.75
    rounded-xs
    font-medium
    text-xs text-(--background)
    bg-(--foreground)
    tracking-wide

    sm:text-tiny
    lg:tracking-normal
  `,
  version: `
    inline-block
    ml-2
    text-tiny
    font-mono
    leading-[0.8]

    sm:text-xtiny
  `,
  backdrop: (isMenuActive: boolean) => tw(`
    absolute top-0 left-0 right-0
    bg-(--background)

    motion-safe:duration-300

    ${isMenuActive ? 'h-[200svh] opacity-100 z-40' : 'h-svh opacity-0 -z-1'}

    sm:bg-(--background)/90
  `),
});
