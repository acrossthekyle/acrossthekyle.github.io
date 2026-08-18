import Link from 'next/link';

import tw from '@/styles';

import Menu from './menu';

export default function Navigation() {
  return (
    <div className={styles.container}>
      <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
        @acrossthekyle
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
    w-full
    p-6
  `,
  anchor: `
    px-1 pt-0.5 pb-0.75 mr-4
    rounded-sm
    text-xs text-(--background)
    bg-(--foreground)

    sm:text-tiny
  `,
  version: `
    text-tiny
    font-mono

    sm:text-xtiny
  `,
});
