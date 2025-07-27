'use client';

import { lowerFirst } from 'lodash';
import { ArrowLeft, ArrowRight, List, Route } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useModel } from './model';
import Map from './route';
import styles from './stylesheet';

type Props = {
  isInitial: boolean;
  slug: string;
};

export default function View({ isInitial, slug }: Props) {
  const {
    handleOnNext,
    handleOnPrevious,
    handleOnTimeline,
    handleOnWaypoints,
    toggle,
    trip,
  } = useModel(slug);

  if (!trip) {
    return null; // todo - add loading state
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {trip.title}
        </h1>
        <p className={styles.excerpt}>
          {trip.description[1]}
        </p>
        <ul className={styles.categories}>
          {trip.categories.map((category) => (
            <li key={category}>
              <Link
                aria-label={`view all trips categorized under ${category}`}
                className={styles.category}
                href={`/categories/${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <section className={styles.body}>
        <figure className={styles.figure}>
          <Image
            alt=""
            className={styles.image}
            height="1080"
            src={trip.images.hero}
            width="1920"
          />
        </figure>
        <h3 className={styles.heading}>
          {trip.description[0]} in {trip.location}
        </h3>
        <div className={styles.previews}>
          <figure className={styles.large}>
            <Image
              alt=""
              className={styles.preview}
              height="1080"
              src={trip.images.large}
              width="1920"
            />
          </figure>
          <figure className={styles.small}>
            <Image
              alt=""
              className={styles.preview}
              height="1080"
              src={trip.images.small}
              width="1920"
            />
          </figure>
        </div>
        <h4 className={styles.subheading}>
          The Trail
        </h4>
        <ul className={styles.stats}>
          <li>
            <h4 className={styles.statheading}>
              <span className={styles.index}>(01)</span>
              Route
            </h4>
            {trip.termini.isSame ? (
              `The ${trip.title} thru-hike started and ended in the same place: ${trip.termini.start} `
            ) : (
              `The ${trip.title} thru-hike started in ${trip.termini.start}, and ended in ${trip.termini.end}`
            )}
          </li>
          <li>
            <h4 className={styles.statheading}>
              <span className={styles.index}>(02)</span>
              Length
            </h4>
            Upon completion the entire trek had covered {trip.stats.distance.value} {trip.stats.distance.units}, or approximately {(trip.stats.distance.value * 1.609).toFixed(0)} kilometers
          </li>
          <li>
            <h4 className={styles.statheading}>
              <span className={styles.index}>(03)</span>
              Duration
            </h4>
            Hiking that distance, from start to finish, took roughly {trip.stats.days.value - 1} nights and {trip.stats.days.value} days
          </li>
          <li>
            <h4 className={styles.statheading}>
              <span className={styles.index}>(04)</span>
              Peak
            </h4>
            By foot, the trail (including any side treks) reached a maximum altitude of {trip.stats.altitude.value} {trip.stats.altitude.units}
          </li>
        </ul>
        {trip.hasRoutes && (
          <Map
            isLoop={trip.termini.isSame}
            routes={trip.routes}
            stages={trip.stages}
          />
        )}
        <button
          className={styles.explore}
          onClick={() => {}}
          type="button"
        >
          Experience The Trail
        </button>
      </section>
      <footer className={styles.footer}>
        <button
          className={styles.navigation}
          onClick={handleOnPrevious}
          type="button"
        >
          <ArrowLeft className={styles.icon} /> Older
        </button>
        <button
          className={styles.navigation}
          onClick={handleOnNext}
          type="button"
        >
          Newer <ArrowRight className={styles.icon} />
        </button>
      </footer>
    </article>
  );
}
