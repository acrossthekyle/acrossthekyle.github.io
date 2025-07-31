'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { InView } from 'react-intersection-observer';

import { useModel } from './footer.model';
import styles from './footer.stylesheet';

type Props = {
  trip: Trip;
};

export default function Footer({ trip }: Props) {
  const {
    handleOnInView,
    hasEnteredView,
  } = useModel();

  return (
    <InView onChange={handleOnInView} threshold={0.5}>
      {({ ref }) => (
        <footer className={styles.footer} ref={ref}>
          <div className={styles.wrapper}>
            {trip.previous && (
              <Link
                className={styles.navigation(hasEnteredView, true)}
                href={`/trips/${trip.previous.slug}`}
              >
                <span className={styles.eyebrow}>
                  Previous
                </span>
                <h3 className={styles.title}>
                  {trip.previous.title}
                </h3>
              </Link>
            )}
          </div>
          <div className={styles.wrapper}>
            {trip.next && (
              <Link
                className={styles.navigation(hasEnteredView, false)}
                href={`/trips/${trip.next.slug}`}
              >
                <span className={styles.eyebrow}>
                  Next
                </span>
                <h3 className={styles.title}>
                  {trip.next.title}
                </h3>
              </Link>
            )}
          </div>
        </footer>
      )}
    </InView>
  );
}
