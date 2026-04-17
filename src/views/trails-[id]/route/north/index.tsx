import { Triangle } from 'lucide-react';

import styles from './stylesheet';

export default function North() {
  return (
    <div className={styles.container} role="presentation">
      <Triangle className={styles.icon} />
      <span className={styles.letter}>
        N
      </span>
    </div>
  );
}
