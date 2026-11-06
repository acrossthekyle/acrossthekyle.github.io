'use client';

import { ChevronRight } from 'lucide-react';

import tw from '@/styles';

import { useModel } from './model';

type Props = {
  hasTimeline: boolean;
};

export default function Jump({ hasTimeline }: Props) {
  const { handleOnSelect } = useModel();

  return (
    <nav aria-label="supplementary navigation" className={styles.container}>
      <select
        className={styles.select}
        name="jump-to"
        onChange={handleOnSelect}
        value=""
      >
        <option value="">Jump to...</option>
        <option value="overview">Overview</option>
        {hasTimeline && <option value="timeline">Timeline</option>}
        <option value="snapshots">Gallery</option>
      </select>
      <span className={styles.mask}>Jump to...</span>
      <ChevronRight aria-hidden="true" className={styles.icon} />
    </nav>
  );
};

const styles = tw({
  container: `
    relative
    flex items-center gap-2
    w-fit
    mb-4
    border border-current/22.5
    rounded-full
    bg-transparent

    motion-safe:duration-300

    group-hover:bg-(--foreground)/5
  `,
  icon: `
    absolute top-1/2 right-2 z-2
    -translate-y-1/2
    size-3.5
    stroke-1
    pointer-events-none
  `,
  mask: `
    absolute inset-0 z-2
    flex items-center
    pl-3
    bg-(--background)
    rounded-full
    text-tiny
    uppercase
    tracking-wider
    pointer-events-none
    select-none

    sm:text-xtiny
  `,
  select: `
    relative z-1
    appearance-none
    rounded-full
    w-full
    pl-3 pr-4
    text-base
    cursor-pointer
  `,
});
