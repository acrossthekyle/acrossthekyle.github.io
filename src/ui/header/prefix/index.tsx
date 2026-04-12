import { ArrowUpLeft } from 'lucide-react';

import styles from './stylesheet';

export default function Prefix({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>
      <ArrowUpLeft className={styles.icon} /> {children}
    </span>
  );
}
