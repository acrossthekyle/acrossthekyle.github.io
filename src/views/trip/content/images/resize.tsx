import {
  Map,
  PanelRightClose,
} from 'lucide-react';

import { useView } from '../hooks';
import { View } from '../types';
import styles from './stylesheet';

export default function Resize() {
  const { resize, view } = useView();

  return (
    <>
      {view !== View.ImageOverMap && (
        <button
          className={`${styles.resize} ${styles.right}`}
          onClick={() => resize(View.ImageOverMap)}
          title="Make image fullscreen"
          type="button"
        >
          <PanelRightClose className={`${styles.icon} ${styles.lg}`} />
          <Map className={`${styles.icon} ${styles.sm}`} />
        </button>
      )}
      {view === View.ImageOverMap && (
        <button
          className={`${styles.resize} ${styles.right}`}
          onClick={() => resize(View.ImageWithMap)}
          title="View map"
          type="button"
        >
          <Map className={styles.icon} />
        </button>
      )}
    </>
  );
}
