'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { InView } from 'react-intersection-observer';

import styles from './stylesheet';
import { type Trip } from './types';

type Props = {
  index: number;
  onClick: (id: string) => void;
  trip: Trip;
};

export default function Card({ index, onClick, trip }: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      if (!hasEnteredView && isInView) {
        setHasEnteredView(true);
      }
    },
    [hasEnteredView],
  );

  return (
    <InView onChange={handleOnInView} threshold={0.01}>
      {({ ref }) => (
        <li className={styles.cell(hasEnteredView)} ref={ref}>
          <figure className={styles.figure}>
            <button
              className={styles.link}
              onClick={() => onClick(trip.id)}
              type="button"
            >
              <Image
                alt=""
                className={styles.image}
                height="333"
                priority={index < 3}
                src={trip.image}
                width="500"
              />
              <figcaption className={styles.caption}>
                <p className={styles.eyebrow}>
                  {new Intl.NumberFormat().format(Number(trip.stats.time))} {trip.label}s
                  {' '}
                  {trip.type !== 'summits' && (
                    <>• {new Intl.NumberFormat().format(Number(trip.stats.distance))} miles
                    </>
                  )}
                  {' '}
                  {trip.type === 'summits' && (
                    <>• {new Intl.NumberFormat().format(Number(trip.stats.altitude))} ft
                    </>
                  )}
                </p>
                <h2 className={styles.title}>{trip.title}</h2>
                <h3 className={styles.year}>{trip.year}</h3>
              </figcaption>
            </button>
          </figure>
        </li>
      )}
    </InView>
  );
}
