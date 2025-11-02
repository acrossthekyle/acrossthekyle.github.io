import Loading from '@/ui/loading';

import styles from './stylesheet';

export default function Fallback() {
  return (
    <div
      aria-modal="true"
      className={styles.container}
      role="dialog"
      tabIndex={-1}
    >
      <Loading />
    </div>
  );
}
