import { Globe, Locate, LocateFixed, Minus, Plus } from 'lucide-react';

import styles from './stylesheet';

type Props = {
  onAll: () => void;
  onFit: () => void;
  onViewWorld: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export default function Controls({
  onAll,
  onFit,
  onViewWorld,
  onZoomIn,
  onZoomOut,
}: Props) {
  return (
    <div className={styles.controls}>
      <button
        className={styles.control}
        onClick={onViewWorld}
        title="World view"
        type="button"
      >
        <Globe className={styles.icon} />
      </button>
      <button
        className={styles.control}
        onClick={onAll}
        title="View entire route"
        type="button"
      >
        <Locate className={styles.icon} />
      </button>
      <button
        className={styles.control}
        onClick={onFit}
        title="Center on current route"
        type="button"
      >
        <LocateFixed className={styles.icon} />
      </button>

      <button
        className={styles.control}
        onClick={onZoomIn}
        title="Zoom in"
        type="button"
      >
        <Plus className={styles.icon} />
      </button>
      <button
        className={styles.control}
        onClick={onZoomOut}
        title="Zoom out"
        type="button"
      >
        <Minus className={styles.icon} />
      </button>
    </div>
  );
}
