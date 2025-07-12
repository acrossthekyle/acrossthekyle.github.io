import { X } from 'lucide-react';

import type { Trip } from '@/types';

import Components from './components';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  trip: Trip;
};

export default function View({ trip }: Props) {
  const {
    currentIndex,
    handleOnClose,
    handleOnChange,
    handleOnNext,
    handleOnPrevious,
  } = useModel(trip.length);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button
          className={styles.close}
          onClick={handleOnClose}
          title="Close trip"
          type="button"
        >
          <X className={styles.x} />
        </button>
        <Components.Main
          index={currentIndex}
          onClose={handleOnClose}
          onNext={handleOnNext}
          onPrevious={handleOnPrevious}
          trip={trip}
        />
        <Components.Routes
          index={currentIndex}
          onChange={handleOnChange}
          trip={trip}
        />
        <Components.Gear trip={trip} />
        <Components.List
          active={currentIndex}
          onChange={handleOnChange}
          trip={trip}
        />
      </div>
    </div>
  );
}
