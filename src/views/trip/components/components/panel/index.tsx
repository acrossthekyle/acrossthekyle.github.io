import { ReactNode } from 'react';

import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
  isActive: boolean;
  onClose: () => void;
};

export default function Panel({ children, isActive, onClose }: Props) {
  return (
    <div className={styles.container(isActive)}>
      <button
        className={styles.backdrop(isActive)}
        onClick={onClose}
        type="button"
      />
      <div className={styles.inner(isActive)}>
        {children}
      </div>
    </div>
  );
}
