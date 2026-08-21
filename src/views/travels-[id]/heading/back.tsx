import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';

export default function Back() {
  return (
    <Link
      className={styles.link}
      href="/#travels"
    >
      <MoveLeft className={styles.icon} />
      <span>Travels</span>
    </Link>
  );
};

const styles = tw({
  link: `
    flex items-center gap-2
    px-2
    text-tiny
    uppercase
    tracking-wider
    border border-current/22.5
    rounded-xs

    motion-safe:duration-300

    hover:bg-(--foreground)/5

    sm:text-xtiny
  `,
  icon: `
    w-3
    stroke-1
  `,
})
