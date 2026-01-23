import { Ellipsis as Icon } from 'lucide-react';

import styles from './stylesheet';

export default function Ellipsis() {
  return (
    <span className={styles.container}>
      <Icon className={styles.icon} />
    </span>
  );
}
