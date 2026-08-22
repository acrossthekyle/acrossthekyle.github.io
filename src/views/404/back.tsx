'use client';

import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import tw from '@/styles';

export default function Back() {
  const router = useRouter();

  return (
    <button
      className={styles.link}
      onClick={router.back}
      type="button"
    >
      <MoveLeft className={styles.icon} />
      <span>Back</span>
    </button>
  );
};

const styles = tw({
  link: `
    flex items-center gap-2
    w-fit
    mt-6
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
  prefix: `
    text-current/75
  `,
  icon: `
    w-3
    stroke-1
  `,
})
