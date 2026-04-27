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
      className={styles.toggle}
      onClick={onToggle}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}
