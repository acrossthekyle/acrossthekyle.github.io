'use client';

import { SwipeEventData, useSwipeable } from 'react-swipeable';

import { useView } from '@/hooks/useView';
import type { Trip } from '@/types';

import Controls from './controls';
import Dots from './dots';
import Gallery from './gallery';
import Header from './header';
import Navigation from './navigation';
import styles from './stylesheet';

type Props = {
  index: number;
  onChange: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  trip: Trip;
};

export default function Main({
  index,
  onChange,
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
      }
    },
  });

  return (
    <div className={styles.container(view)}>
      <Gallery active={index} swipeable={swipeable.ref} trip={trip} />
      <Header active={index} trip={trip} />
      <Navigation onNext={onNext} onPrevious={onPrevious} suffix={trip.label} />
      <Controls
        hasGear={trip.hasGear}
        hasGps={trip.hasGps}
        hasRoutes={trip.hasRoutes}
      />
      <Dots active={index} onClick={onChange} total={trip.length} />
    </div>
  );
}
