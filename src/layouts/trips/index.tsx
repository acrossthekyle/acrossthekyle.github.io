'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { activeRef, isLoading, isOnTrip, route, trips } = useModel();

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
            <li
              className={styles.item}
              key={trip.index}
              ref={route === `/trips/${trip.slug}` ? activeRef : undefined}
              style={{ animationDelay: `${0.1 + (trip.index * 0.025)}s` }}
            >
              <Link
                className={styles.link(
                  isOnTrip,
                  route === `/trips/${trip.slug}`,
                )}
                href={
                  isOnTrip && route === `/trips/${trip.slug}` ? '/trips' : `/trips/${trip.slug}`
                }
              >
                {trip.title.map((part) => (
                  <span className={styles.part} key={part}>{part}</span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </>
  );
}
