import Link from 'next/link';

import tw from '@/styles';

export default function Anchor() {
  return (
    <Link aria-label="acrossthekyle.com" className={styles.container} href="/">
      @acrossthekyle
    </Link>
  );
};

const styles = tw({
  container: `
    m-2 mt-1
    px-2 pt-0.5 pb-0.75
    rounded-full
    font-medium font-geist
    text-xs text-(--background)
    bg-(--foreground)
    tracking-wide

    sm:text-tiny
  `,
});
