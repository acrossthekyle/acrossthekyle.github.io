import { ArrowUpRight } from 'lucide-react';

import styles from './stylesheet';

export default function Arrow({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}<ArrowUpRight className={styles.icon} />
    </>
  );
}
