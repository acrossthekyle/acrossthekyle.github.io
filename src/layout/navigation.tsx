import Link from 'next/link';

import tw from '@/styles';

import Menu from './menu';

export default function Navigation() {
  return (
    <div className={styles.container}>
      <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
        <span className={styles.inner}>
          @acrossthekyle
        </span>
      </Link>
      <span className={styles.version}>
        v0.1701.D
      </span>
      <Menu />
    </div>
  );
};

const styles = tw({
  container: `
    flex items-center
    p-2 px-4 pt-3
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
