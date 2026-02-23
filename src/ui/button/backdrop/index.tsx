'use client';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};

export default function Backdrop({ children, onClick }: Props) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
