'use client';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  caption?: string[];
};

export default function Maximize({ caption }: Props) {
  const { handleOnMaximize, zoomRef } = useModel(caption);

  return (
    <button
      className={styles.landscape}
      onClick={handleOnMaximize}
      ref={zoomRef}
      title="Maximize"
      type="button"
    />
  );
}
