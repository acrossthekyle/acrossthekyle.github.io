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
    <header className={`${styles.container} ${className}`.trim()}>
      {children}
    </header>
  );
}
