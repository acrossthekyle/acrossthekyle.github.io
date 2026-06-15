import { ArrowUpRight } from 'lucide-react';
import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

type Props = {
  isCurrent: boolean;
  isExternal: boolean;
};

export default function Text({
  children,
  isCurrent,
  isExternal,
}: PropsWithChildren<Props>) {
  return (
    <span className={styles.container(isCurrent)}>
      {children} {isExternal && (
        <ArrowUpRight aria-hidden="true" className={styles.arrow} />
      )}
    </span>
  );
}
