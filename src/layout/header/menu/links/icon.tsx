import { ArrowUpRight, MoveRight } from 'lucide-react';

import tw from '@/styles';

type Props = {
  isExternal?: boolean;
};

export default function Icon({ isExternal }: Props) {
  if (isExternal) {
    return <ArrowUpRight aria-hidden="true" className={styles.container} />;
  }

  return <MoveRight aria-hidden="true" className={styles.container} />;
};

const styles = tw({
  container: `
    w-3
    stroke-2
  `,
})
