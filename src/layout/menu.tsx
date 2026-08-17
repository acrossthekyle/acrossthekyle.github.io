'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';

import tw from '@/styles';

export default function Menu() {
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

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <FocusLock disabled={!isActive}>
      <nav aria-label="main navigation">
        <AutoFocusInside>
          <button
            className={styles.cta}
            onClick={handleToggle}
            type="button"
          >
            <span className={`${styles.bar} ${styles.first(isActive)}`} />
            <span className={`${styles.bar} ${styles.middle(isActive)}`} />
            <span className={`${styles.bar} ${styles.last(isActive)}`} />
          </button>
        </AutoFocusInside>
        <div
          className={styles.backdrop(isActive)}
          onClick={handleToggle}
          role="presentation"
        />
        <ul className={styles.items(isActive)}>
          <li className={styles.item}>
            <Link className={styles.link} href="/" onClick={handleClick}>
              <span className={styles.index}>01</span>
              Index
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/#about" onClick={handleClick}>
              <span className={styles.index}>02</span>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/#travels" onClick={handleClick}>
              <span className={styles.index}>03</span>
              Travels
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/#connect" onClick={handleClick}>
              <span className={styles.index}>04</span>
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </FocusLock>
  );
};

const styles = tw({
  cta: `
    absolute left-full top-4.5 z-100
    -translate-x-12
    flex flex-col items-end
    w-6 h-6
    rotate-0

    motion-safe:duration-300

    sm:left-1/2
    lg:left-1/3
  `,
  bar: `
    block
    absolute
    h-px
    bg-(--foreground)
    rounded-sm

    motion-safe:duration-300
  `,
  first: (isActive: boolean) => tw(`
    w-full
    ${isActive ? 'top-3' : 'top-1.5'}
    ${isActive ? 'rotate-45' : 'rotate-0'}
  `),
  middle: (isActive: boolean) => tw(`
    top-3
    w-1/2
    ${isActive ? 'right-full' : 'right-0'}
    ${isActive ? 'opacity-0' : 'opacity-100'}
  `),
  last: (isActive: boolean) => tw(`
    ${isActive ? 'w-full' : 'w-2/3'}
    ${isActive ? 'top-3' : 'top-4.5'}
    ${isActive ? '-rotate-45' : 'rotate-0'}
  `),
  backdrop: (isActive: boolean) => tw(`
    absolute inset-0
    bg-(--background)/90

    motion-safe:duration-300

    ${isActive ? 'opacity-100 z-40' : 'opacity-0 -z-1'}
  `),
  items: (isActive: boolean) => tw(`
    absolute left-0 top-0 bottom-0 z-50
    flex flex-col justify-end gap-2
    w-full
    p-6
    bg-(--background)
    border-r border-current/5

    motion-safe:duration-300

    ${isActive ? 'translate-x-0' : `
      -translate-x-full invisible transition-[visibility]
    `}

    sm:w-[50svw]
    lg:w-[33.333333svw]
  `),
  item: `
    font-black
    uppercase
  `,
  link: `
    flex flex-row-reverse items-start justify-between
    text-[min(8vw,1.9rem)]
    tracking-wide
    h-7
    leading-[1]
    overflow-hidden

    motion-safe:duration-300

    hover:text-current/50

    sm:h-6
    sm:text-[min(4vw,1.75rem)]
  `,
  index: `
    font-normal
    text-tiny text-current/75
  `,
});
