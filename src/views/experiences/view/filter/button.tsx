'use client';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};

export default function Button({ children, onClick, ...rest }: Props) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
