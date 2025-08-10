'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import type { Trip } from '@/types';

import { useModel } from './index.item.model';
import styles from './stylesheet';

type Props = {
  isOnTrip: boolean;
  trip: Trip;
};

export default function Item({ isOnTrip, trip }: Props) {
  const { activeRef, handleOnInView, hasEnteredView, route } = useModel(isOnTrip);

  return (
    <InView onChange={handleOnInView} threshold={1}>
      {({ ref }) => (
        <li
          className={styles.item}
          ref={route === `/trips/${trip.slug}` ? activeRef : undefined}
          style={{ animationDelay: `${0.1 + (trip.index * 0.025)}s` }}
        >
          <Link
            className={styles.link(
              isOnTrip,
              route === `/trips/${trip.slug}`,
              hasEnteredView,
            )}
            href={
              isOnTrip && route === `/trips/${trip.slug}` ? '/trips' : `/trips/${trip.slug}`
            }
            ref={ref}
          >
            {trip.title.map((part) => (
              <span className={styles.part} key={part}>{part}</span>
            ))}
          </Link>
        </li>
      )}
    </InView>
  );
}
