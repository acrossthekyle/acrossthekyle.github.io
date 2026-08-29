import { MoveRight } from 'lucide-react';

import tw from '@/styles';

export default function Icon() {
  return (
    <MoveRight aria-hidden="true" className={styles.container} />
  );
};

const styles = tw({
  container: `
    absolute top-1/2 right-0.5
    -translate-y-1/2
    w-3 h-3
    stroke-1
    opacity-50

    motion-safe:duration-300

    lg:opacity-0

    group-hover:opacity-100
  `,
});
