'use client';

import styles from './stylesheet';

type Props = {
  label?: string;
  onToggle?: () => void;
};

export default function Preview({
  children,
  label,
  onToggle,
}: React.PropsWithChildren<Props>) {
  return (
    <button
      className={styles.container}
      onClick={onToggle}
      title={label}
      type="button"
    >
      <div className={styles.inner}>
        <span className={styles.clamp}>{children}</span>
      </div>
    </button>
  );
}
