import {
  PanelLeft,
  PanelRight,
} from 'lucide-react';

import { useView } from '../hooks';
import { View } from '../types';
import styles from './stylesheet';

export default function Resize() {
  const { resize, view } = useView();

  return (
    <>
      {view === View.ImageWithMap && (
        <button
          className={styles.resize}
          onClick={() => resize(View.MapWithImage)}
          title="Expand map"
          type="button"
        >
          <PanelLeft className={styles.icon} />
        </button>
      )}
      {view === View.MapWithImage && (
        <button
          className={styles.resize}
          onClick={() => resize(View.ImageWithMap)}
          title="Collapse map"
          type="button"
        >
          <PanelRight className={styles.icon} />
        </button>
      )}
    </>
  );
}
