import { PropsWithChildren } from 'react';

import styles from './stylesheet';

type Props = {
  className?: string;
};

export default function Header({
  children,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <h2
      className={`${styles.container} ${className}`.trim()}
      id="dialog-header"
    >
      {children}
    </h2>
  );
}
