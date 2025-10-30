import Loading from '@/ui/loading';

import styles from './stylesheet';

export default function Fallback() {
  return (
    <dialog className={styles.container} open>
      <Loading />
    </dialog>
  );
}
