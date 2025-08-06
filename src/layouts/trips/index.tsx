'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { isOnTrip, route, trips } = useModel();

  return (
    <>
      <section className={styles.section}>
        <ul className={styles.trips(isOnTrip)}>
          {trips.map((trip) => (
            <li className={styles.item} key={trip.index}>
              <Link
                className={styles.link(
                  isOnTrip,
                  route === `/trips/${trip.slug}`,
                )}
                href={
                  isOnTrip && route === `/trips/${trip.slug}` ? '/trips' : `/trips/${trip.slug}`
                }
              >
                {trip.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </>
  );
}
