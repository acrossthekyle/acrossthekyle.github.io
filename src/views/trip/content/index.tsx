import { ClipboardList, X } from 'lucide-react';

import { type Trip } from '../types';
import Gear from './gear';
import { useView } from './hooks';
import Images from './images';
import { useModel } from './model';
import Routes from './routes';
import styles from './stylesheet';

type Props = {
  trip: Trip;
};

export default function Content({ trip }: Props) {
  const {
    currentIndex,
    handleOnClose,
    handleOnGear,
    handleOnIndexChange,
    handleOnNext,
    handleOnPrevious,
    isGearActive,
    stages,
  } = useModel(trip);

  const { view } = useView();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button
          className={styles.close}
          onClick={handleOnClose}
          type="button"
        >
          <X className={styles.icon} />
        </button>
        <Gear
          gear={trip.gear}
          isActive={isGearActive}
          onToggle={handleOnGear}
        />
        <div className={styles.images(view)}>
          <Images
            currentIndex={currentIndex}
            label={trip.label}
            location={trip.location}
            onChange={handleOnIndexChange}
            onNext={handleOnNext}
            onPrevious={handleOnPrevious}
            stages={stages}
            title={trip.title}
          />
          <button
            className={styles.toggle}
            onClick={handleOnGear}
            title="View gear"
            type="button"
          >
            <ClipboardList className={styles.gear} />
          </button>
        </div>
        <div className={styles.routes(view)}>
          <Routes
            currentIndex={currentIndex}
            onChange={handleOnIndexChange}
            stages={stages}
            trip={trip}
          />
        </div>
      </div>
    </div>
  );
}
