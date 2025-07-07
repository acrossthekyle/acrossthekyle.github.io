import { X } from 'lucide-react';
import { ReactNode } from 'react';

import { useView } from '@/hooks/useView';
import { Overlay } from '@/types';

import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
  isActive: boolean;
};

export default function Panel({ children, isActive }: Props) {
  const { shift } = useView();

  return (
    <div className={styles.container(isActive)}>
      <button
        className={styles.backdrop(isActive)}
        onClick={() => shift(Overlay.None)}
        type="button"
      />
      <div className={styles.inner(isActive)}>
        <button
          className={styles.close}
          onClick={() => shift(Overlay.None)}
          type="button"
        >
          <X className={styles.arrow} />
        </button>
        {children}
      </div>
    </div>
  );
}
