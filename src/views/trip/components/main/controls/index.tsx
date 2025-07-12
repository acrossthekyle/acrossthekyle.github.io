import {
  List,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Map,
} from 'lucide-react';

import { useView } from '@/hooks/useView';
import { Overlay, View } from '@/types';

import Components from '../components';
import styles from './stylesheet';

type Props = {
  hasGear: boolean;
  hasGps: boolean;
  hasRoutes: boolean;
  onNext: () => void;
  onPrevious: () => void;
  suffix: string;
};

export default function Controls({
  hasGear,
  hasGps,
  hasRoutes,
  onNext,
  onPrevious,
  suffix,
}: Props) {
  const { shift, view } = useView();

  return (
    <div className={styles.container}>
      <Components.Button
        className={styles.control}
        onClick={onPrevious}
        title={`Previous ${suffix}`}
      >
        <ChevronLeft className={styles.icon} />
      </Components.Button>
      <Components.Button
        className={styles.control}
        onClick={() => shift(Overlay.List)}
        title="View itinerary"
      >
        <List className={styles.icon} />
      </Components.Button>
      {hasGear && (
        <Components.Button
          className={styles.control}
          onClick={() => shift(Overlay.Gear)}
          title="View gear"
        >
          <ClipboardList className={styles.icon} />
        </Components.Button>
      )}
      {(hasRoutes || hasGps) && (
        <Components.Button
          className={styles.control}
          onClick={() => shift(
            view === View.ImageOverMap ? View.ImageWithMap : View.ImageOverMap,
          )}
          title="Toggle map"
        >
          <Map className={styles.icon} />
        </Components.Button>
      )}
      <Components.Button
        className={styles.control}
        onClick={onNext}
        title={`Next ${suffix}`}
      >
        <ChevronRight className={styles.icon} />
      </Components.Button>
    </div>
  );
}
