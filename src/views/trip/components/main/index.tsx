'use client';

import { SwipeEventData, useSwipeable } from 'react-swipeable';

import { useView } from '@/hooks/useView';
import type { Trip } from '@/types';

import Controls from './controls';
import Gallery from './gallery';
import Header from './header';
import styles from './stylesheet';

type Props = {
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  trip: Trip;
};

export default function Main({
  index,
  onClose,
  onNext,
  onPrevious,
  trip,
}: Props) {
  const { view } = useView();

  const swipeable = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      if (eventData.dir.toLowerCase() === 'left') {
        onNext();
      } else if (eventData.dir.toLowerCase() === 'right') {
        onPrevious();
      } else if (eventData.dir.toLowerCase() === 'down') {
        onClose();
      }
    },
  });

  return (
    <div className={styles.container(view)}>
      <Gallery active={index} swipeable={swipeable.ref} trip={trip} />
      <Header trip={trip} />
      <Controls
        hasGear={trip.hasGear}
        hasGps={trip.hasGps}
        hasRoutes={trip.hasRoutes}
        onNext={onNext}
        onPrevious={onPrevious}
        suffix={trip.label}
      />
    </div>
  );
}
