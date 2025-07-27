'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { InView } from 'react-intersection-observer';

import type { Trip } from '@/types';

import styles from './stylesheet';

type Props = {
  trip: Trip;
};

export default function Card({ trip }: Props) {
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
          <figure className={styles.figure}>
            <Link
              className={styles.link}
              href={`/trips/${trip.slug}`}
            >
              <Image
                alt=""
                className={styles.image(hasEnteredView)}
                height="333"
                priority={trip.index < 3}
                src={trip.images.hero}
                width="500"
              />
            </Link>
            <figcaption className={styles.caption}>
              <h2 className={styles.title}>
                <span className={styles.eyebrow}>
                  {trip.categories.join(' • ')}
                </span>
                <Link href={`/trips/${trip.slug}`}>
                  {trip.title}
                </Link>
              </h2>
              <span className={styles.subtitle}>
                {trip.description[1]}
              </span>
            </figcaption>
          </figure>
        </li>
      )}
    </InView>
  );
}
