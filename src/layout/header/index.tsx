import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

import Menu from './menu';

type Props = {
  collections: Collection[];
};

export default function Navigation({ collections }: Props) {
  return (
    <header className={styles.container}>
      <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
        <span className={styles.inner}>
          @acrossthekyle
        </span>
      </Link>
      <span className={styles.version}>
        v0.1701.D
      </span>
      <Menu collections={collections} />
    </header>
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
    rounded-sm
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
});
