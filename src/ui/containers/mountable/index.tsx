import { PropsWithChildren } from 'react';

import styles from './stylesheet';

type Props = {
  className?: string;
  isActive: boolean;
};

export default function Mountable({
  children,
  className = '',
  isActive,
}: PropsWithChildren<Props>) {
  return (
    <div className={`${styles.container(isActive)} ${className}`.trim()}>
      {children}
    </div>
  );
}
