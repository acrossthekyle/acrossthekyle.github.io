import {
  PanelLeft,
  PanelRight,
} from 'lucide-react';

import { useView } from '@/hooks/useView';
import { View } from '@/types';

import styles from './stylesheet';

export default function Controls() {
  const { shift, view } = useView();

  return (
    <>
      {view === View.ImageWithMap && (
        <button
          className={styles.control}
          onClick={() => shift(View.MapWithImage)}
          title="Expand map"
          type="button"
        >
          <PanelLeft className={styles.icon} />
        </button>
      )}
      {view === View.MapWithImage && (
        <button
          className={styles.control}
          onClick={() => shift(View.ImageWithMap)}
          title="Collapse map"
          type="button"
        >
          <PanelRight className={styles.icon} />
        </button>
      )}
    </>
  );
}
