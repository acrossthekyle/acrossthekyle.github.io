import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
  onToggle: () => void;
};

export default function Notes({
  children,
  isActive,
  onToggle,
}: React.PropsWithChildren<Props>) {
  return (
    <div>
      {children}
      <button
        className={styles.more}
        onClick={onToggle}
        type="button"
      >
        {isActive && (
          <>
            <ArrowLeft className={styles.external} /> Less
          </>
        )}
        {!isActive && (
          <>
            More <ArrowRight className={styles.external} />
          </>
        )}
      </button>
    </div>
  );
}
