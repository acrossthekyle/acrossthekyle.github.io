import { PropsWithChildren } from 'react';

import styles from './stylesheet';

type Props = {
  isActive: boolean;
};

export default function Mountable({
  children,
  isActive,
}: PropsWithChildren<Props>) {
  return (
    <div className={styles.container(isActive)}>
      {children}
    </div>
  );
}
