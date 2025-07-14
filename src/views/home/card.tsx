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
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      setHasEnteredView(isInView);

      if (!hasBeenScrolled && isInView) {
        setHasBeenScrolled(true);
      }
    },
    [hasBeenScrolled],
  );

  return (
    <InView onChange={handleOnInView} threshold={0.75}>
      {({ ref }) => (
        <li className={styles.card(hasBeenScrolled, hasEnteredView)} ref={ref}>
          <figure className={styles.figure(hasBeenScrolled)}>
            <button
              className={styles.link}
              onClick={onClick}
              type="button"
            >
              <Image
                alt=""
                className={styles.image(hasEnteredView)}
                height="333"
                priority={index < 3}
                src={trip.image}
                width="500"
              />
              <figcaption className={styles.caption}>
                <h2 className={styles.title}>{trip.title}</h2>
                <span className={styles.subtitle}>
                  {trip.type} • {trip.year}
                </span>
              </figcaption>
            </button>
          </figure>
        </li>
      )}
    </InView>
  );
}
