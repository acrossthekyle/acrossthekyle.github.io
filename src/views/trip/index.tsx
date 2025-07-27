'use client';

import { lowerFirst } from 'lodash';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
      <header className={`${styles.screen} ${styles.header}`}>
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
        <h1 className={styles.title}>
          {trip.title}
        </h1>
        <p className={styles.excerpt}>
          {trip.description[1]}
        </p>
      </header>
      <section className={styles.body}>
        <figure className={styles.screen}>
          <Image
            alt=""
            className={styles.hero}
            height="1080"
            src={trip.images.hero}
            width="1920"
          />
        </figure>
        <div className={`${styles.intro}`}>
          <h3 className={styles.heading}>
            {trip.description[0]}
          </h3>
          {/*<button
            className={styles.explore}
            onClick={() => {}}
            type="button"
          >
            Experience The Trail
          </button>*/}
          <ul className={styles.stats}>
            <li>
              <h4 className={styles.eyebrow}>
                Start
              </h4>
              The {trip.title} started at {trip.termini.start}.
            </li>
            <li>
              <h4 className={styles.eyebrow}>
                Distance
              </h4>
              The entire trek was {trip.stats.distance.value.imperial} {trip.stats.distance.units.imperial.full}, or {trip.stats.distance.value.metric} {trip.stats.distance.units.metric.full}.
            </li>
            <li>
              <h4 className={styles.eyebrow}>
                Duration
              </h4>
              Covering that distance, from start to finish, took {trip.stats.days.value} days.
            </li>
            <li>
              <h4 className={styles.eyebrow}>
                Peak
              </h4>
              The hike reached a maximum altitude of {trip.stats.altitude.value.imperial} {trip.stats.altitude.units.imperial.abbreviated}, or {trip.stats.altitude.value.metric} {trip.stats.altitude.units.metric.abbreviated}.
            </li>
          </ul>
        </div>

        <h3 className={styles.subheading}>
          Timeline
        </h3>
        <h4 className={styles.dates}>
          <span className={styles.year}>
            {trip.date.year.join(' - ')}
          </span>
          {trip.date.dates.start.long.month} {trip.date.dates.start.long.day} &mdash; {trip.date.dates.end.long.month} {trip.date.dates.end.long.day}
        </h4>
        <ul className={styles.timeline}>
          {trip.stages.map((stage) => (
            <li className={styles.step} key={stage.index}>
              <figure className={styles.figure}>
                <Image
                  alt=""
                  className={styles.preview}
                  height="1080"
                  src={stage.images.hero}
                  width="1920"
                />
                <figcaption className={styles.caption}>
                  {stage.termini.end}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/*{trip.hasRoutes && (
          <Map
            isLoop={trip.termini.isSame}
            routes={trip.routes}
            stages={trip.stages}
          />
        )}*/}
      </section>
      <footer className={styles.footer}>
        <button
          className={styles.navigation}
          onClick={handleOnPrevious}
          type="button"
        >
          <ArrowLeft className={styles.icon} /> Previous Trip
        </button>
        {trip.index !== 0 && (
          <button
            className={styles.navigation}
            onClick={handleOnNext}
            type="button"
          >
            Next Trip <ArrowRight className={styles.icon} />
          </button>
        )}
      </footer>
    </article>
  );
}
