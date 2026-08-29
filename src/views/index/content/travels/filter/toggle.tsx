import { ChevronDown } from 'lucide-react';

import tw from '@/styles';

type Props = {
  filterBy: string;
};

export default function Toggle({ filterBy }: Props) {
  return (
    <button
      aria-hidden="true"
      className={styles.container}
      onClick={() => { /* noop */ }}
      type="button"
    >
      <span className={styles.prefix}>Category:</span>
      {filterBy}
      <ChevronDown className={styles.icon} />
    </button>
  );
};

const styles = tw({
  container: `
    flex items-center gap-2
    w-fit
    px-3 py-1
    border border-current/22.5
    rounded-full
    uppercase
    text-tiny
    uppercase
    tracking-wider
    bg-transparent

    motion-safe:duration-300

    group-hover:bg-(--foreground)/5

    sm:text-xtiny
  `,
  prefix: `
    font-normal
    text-current/50
  `,
  icon: `
    w-3.5 h-3.5
    stroke-1
  `,
});
