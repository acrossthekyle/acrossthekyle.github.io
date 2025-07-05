'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { InView } from 'react-intersection-observer';

import type { Trip } from '@/types';

import styles from './stylesheet';

type Props = {
  index: number;
  onClick: () => void;
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
        <li className={styles.card(hasEnteredView)} ref={ref}>
          <figure className={styles.figure}>
            <button
              className={styles.link}
              onClick={onClick}
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
                  {
                    trip.stats
                      .map(({ value, units }) => `${value} ${units}`)
                      .join(' • ')
                  }
                </p>
                <h2 className={styles.title}>{trip.title}</h2>
                <h3 className={styles.year}>
                  {[trip.date, trip.year].filter(Boolean).join(', ')}
                </h3>
                <span className={styles.tag}>{trip.type}</span>
              </figcaption>
            </button>
          </figure>
        </li>
      )}
    </InView>
  );
}
