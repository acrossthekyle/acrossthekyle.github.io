import { ClipboardList, Map } from 'lucide-react';

import { useView } from '@/hooks/useView';
import { Overlay, View } from '@/types';

import styles from './stylesheet';

type Props = {
  hasGear: boolean;
  hasGps: boolean;
  hasRoutes: boolean;
};

export default function Controls({ hasGear, hasGps, hasRoutes }: Props) {
  const { shift, view } = useView();

  return (
    <>
      {hasGear && (
        <button
          className={`${styles.control} ${styles.gear}`}
          onClick={() => shift(Overlay.Gear)}
          title="View gear"
          type="button"
        >
          <ClipboardList className={styles.icon} /> Gear
        </button>
      )}
      {(hasRoutes || hasGps) && (
        <button
          className={`${styles.control} ${styles.map}`}
          onClick={() => shift(
            view === View.ImageOverMap ? View.ImageWithMap : View.ImageOverMap,
          )}
          title="Toggle map"
          type="button"
        >
          Map <Map className={styles.icon} />
        </button>
      )}
    </>
  );
}
