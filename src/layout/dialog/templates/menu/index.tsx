'use client';

import { useDialog } from '@/hooks/useDialog';
import type { Collection } from '@/types';

import Menu from '../../../menu';

import styles from './stylesheet';

type Props = {
  data?: {
    collections?: Collection[];
  };
};

export default function Template({ data }: Props) {
  const { onClose } = useDialog();

  if (!data?.collections) {
    return null;
  }

  return (
    <div className={styles.container}>
      {/*<button
        aria-label="close info"
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        ESC
      </button>*/}
      <Menu collections={data.collections} />
    </div>
  );
}
