'use client';

import type { Trip } from '@/types';

import Card from './timeline.card';
import { useModel } from './timeline.model';
import styles from './timeline.stylesheet';

type Props = {
  trip: Trip;
};

export default function Timeline({ trip }: Props) {
  const { activeIndex, handleOnClick } = useModel();

  return (
    <>
      <p className={styles.description}>
        {trip.description[1]}
      </p>
      <h3 className={styles.title}>
        {trip.label}s
      </h3>
      <ul className={styles.timeline}>
        {trip.stages.map((stage) => (
          <Card
            activeIndex={activeIndex}
            key={stage.index}
            onClick={handleOnClick}
            stage={stage}
            type={trip.type}
          />
        ))}
      </ul>
    </>
  );
}
