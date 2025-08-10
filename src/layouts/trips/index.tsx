'use client';

import { ReactNode } from 'react';

import Item from './index.item';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { isLoading, isOnTrip, trips } = useModel();

  return (
    <>
      <section className={styles.section(isOnTrip)}>
        <ul className={styles.trips(isOnTrip)}>
          {isLoading && Array.from({ length: 11 }).map((_, index) => (
            <li
              className={styles.item}
              key={index}
              style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
            >
              <div className={styles.skeleton} />
              <div className={styles.skeleton} />
              <div className={styles.skeleton} />
            </li>
          ))}
          {!isLoading && trips.map((trip) => (
            <Item
              isOnTrip={isOnTrip}
              key={trip.index}
              trip={trip}
            />
          ))}
        </ul>
      </section>
      {children}
    </>
  );
}
