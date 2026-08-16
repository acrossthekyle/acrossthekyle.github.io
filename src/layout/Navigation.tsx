import { AlignRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';

export default function Navigation() {
  return (
    <div className={styles.container}>
      <Link aria-label="acrossthekyle.com" className={styles.anchor} href="/">
        @acrossthekyle
      </Link>
      <span className={styles.version}>
        v1.98.0
      </span>
      <button className={styles.menu} type="button">
        <AlignRight className={styles.icon} />
      </button>
    </div>
  );
};

const styles = tw({
  container: `
    relative
    flex items-center
    w-full
    p-6
  `,
  anchor: `
    px-1 pt-0.5 pb-0.75 mr-4
    rounded-sm
    text-tiny text-(--background)
    bg-(--foreground)
  `,
  version: `
    text-xtiny
    font-mono
  `,
  menu: `
    absolute right-6
  `,
  icon: `
    w-5.5
    stroke-1
  `,
});
