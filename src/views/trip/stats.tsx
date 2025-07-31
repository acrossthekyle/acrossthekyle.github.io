'use client';

import { InView } from 'react-intersection-observer';

import type { Trip } from '@/types';

import { useModel } from './stats.model';
import styles from './stats.stylesheet';

type Props = {
  trip: Trip;
};

export default function Stats({ trip }: Props) {
  const {
    handleOnInView,
    stats,
  } = useModel(trip);

  return (
    <InView onChange={handleOnInView} threshold={0.1}>
      {({ ref }) => (
        <ul className={styles.stats} ref={ref}>
          {stats.map((stat) => (
            <li className={styles.stat} key={stat.label}>
              <h4 className={styles.eyebrow}>
                {stat.label}
              </h4>
              <p className={styles.value}>
                <span ref={stat.ref} />
                <span className={styles.units}>
                  {stat.units}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </InView>
  );
}
