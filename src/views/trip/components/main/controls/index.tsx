import { AlignLeft, ClipboardList, Map } from 'lucide-react';

import { useView } from '@/hooks/useView';
import { Overlay, View } from '@/types';

import Components from '../components';
import styles from './stylesheet';

type Props = {
  hasGear: boolean;
  hasGps: boolean;
  hasRoutes: boolean;
};

export default function Controls({ hasGear, hasGps, hasRoutes }: Props) {
  const { shift, view } = useView();

  return (
    <div className={styles.container}>
      {hasGear && (
        <Components.Button
          className={styles.control}
          onClick={() => shift(Overlay.Gear)}
          title="View gear"
        >
          <ClipboardList className={styles.icon} /> Gear
        </Components.Button>
      )}
      <Components.Button
        className={styles.control}
        onClick={() => shift(Overlay.List)}
        title="View all"
      >
        <AlignLeft className={styles.icon} /> Itinerary
      </Components.Button>
      {(hasRoutes || hasGps) && (
        <Components.Button
          className={styles.control}
          onClick={() => shift(
            view === View.ImageOverMap ? View.ImageWithMap : View.ImageOverMap,
          )}
          title="Toggle map"
        >
          Map <Map className={styles.icon} />
        </Components.Button>
      )}
    </div>
  );
}
