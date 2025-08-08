'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { activeRef, isOnTrip, route, trips } = useModel();

  return (
    <>
      <section className={styles.section}>
        <ul className={styles.trips(isOnTrip)}>
          {trips.map((trip) => (
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
