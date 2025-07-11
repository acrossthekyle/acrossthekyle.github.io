import { ReactNode } from 'react';

import styles from './stylesheet';

type Props = {
  children: ReactNode;
  className: string;
  onClick: () => void;
  title?: string;
};

export default function Button({
  children,
  className,
  onClick,
  title,
}: Props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}
