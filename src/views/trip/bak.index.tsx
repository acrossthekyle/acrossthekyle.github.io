'use client';

import { lowerFirst } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

import type { Trip } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';

type CardProps = {
  children: React.ReactNode;
  className: string;
  color: string;
  direction: string;
  exitDirection: string | null;
};

function Card({
  children,
  className,
  color,
  direction,
  exitDirection,
}: CardProps) {
  return (
    <div
      className={`${className} ${color} ${styles.card(direction, exitDirection)}`}
    >
      {children}
    </div>
  );
}

type SectionProps = {
  trip: Trip;
};

function Hero({ trip }: SectionProps) {
  return (
    <>
      <Image
        alt=""
        className={styles.image}
        height="1080"
        src={trip.images.hero}
        width="1920"
      />
      <div className={styles.caption}>
        <h2 className={styles.title}>{trip.title}</h2>
        <span className={styles.location}>
          {trip.location}, {lowerFirst(trip.tagline)}
        </span>
      </div>
    </>
  );
}

function Description({ trip }: SectionProps) {
  return (
    <>
      <h3 className={styles.heading}>{trip.description[0]}</h3>
      <p className={styles.excerpt}>{trip.description[1]}</p>
    </>
  );
}

function What({ trip }: SectionProps) {
  const altitude = trip.stats.find(({ label }) => label === 'altitude');
  const distance = trip.stats.find(({ label }) => label === 'distance');
  const days = trip.stats.find(({ label }) => label === 'days');
  const length = trip.stats.find(({ label }) => label === 'length');

  let excerpt = null;

  if (trip.type === 'thru-hike') {
    excerpt = `${distance?.value} ${distance?.units} over ${days?.value} days, with a max altitude of ${altitude?.value} ${altitude?.units}`;
  } else if (trip.type === 'section-hike') {
    excerpt = `${length.value} sections, with the highest point at ${altitude?.value} ${altitude?.units}`;
  } else if (trip.type === 'peak-bagging') {
    excerpt = `${length.value} summits, reaching a max elevation of ${altitude?.value} ${altitude?.units}`;
  } else {
    excerpt = `Getting away for ${days?.value} days and experiencing ${length.value} landmarks`;
  }

  return (
    <>
      <h3 className={`${styles.heading} capitalize`}>{trip.type}</h3>
      <p className={styles.excerpt}>
        {excerpt}
      </p>
    </>
  );
}

function Which({ trip }: SectionProps) {
  let heading = 'Route';
  let description = null;

  if (trip.type === 'thru-hike') {
    if (trip.termini.isSame) {
      description = `Trekking through the countryside, starting and ending at ${trip.termini.start}.`;
    } else {
      description = `Trekking through the countryside from ${trip.termini.start} to ${trip.termini.end}.`;
    }
  } else if (trip.type === 'section-hike') {
    description = `From the ${trip.termini.start} to the ${trip.termini.end}.`;
  } else if (trip.type === 'peak-bagging') {
    heading = 'Summits';

    description = `Towering heights exceeding 14,000 feet in elevation from ${trip.termini.start} to ${trip.termini.end}.`;
  } else {
    heading = 'Places';

    description = `Exploring the sights and sounds from ${trip.cities.join(' to ')}.`;
  }

  return (
    <>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.excerpt}>
        {description}
      </p>
    </>
  );
}

function More({ trip }: SectionProps) {
  if (trip.type === 'thru-hike') {
    return 'Experience the trail';
  }

  if (trip.type === 'section-hike') {
    return 'Track the progress';
  }

  if (trip.type === 'peak-bagging') {
    return 'Explore the summits';
  }

  return 'View the sights';
}

type Props = {
  isInitial: boolean;
  slug: string;
};

export default function View({ isInitial, slug }: Props) {
  const {
    colors,
    handleOnPrevious,
    handleOnNext,
    exitDirection,
    mouse,
    trip,
  } = useModel(slug);

  if (!trip) {
    return null; // todo - add loading state
  }

  return (
    <div className={styles.container(isInitial)}>
      <div
        className={styles.mouse(exitDirection !== null)}
        style={{
          background: `radial-gradient(450px at ${mouse.x}px ${mouse.y}px, ${colors.highlight}, transparent 100%)`,
        }}
      />
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.grid1}>
            <Card
              className={styles.hero}
              color={colors.card}
              direction="right"
              exitDirection={exitDirection}
            >
              <Hero trip={trip} />
            </Card>
          </div>
          <div className={styles.grid2}>
            <Card
              className={styles.description}
              color={colors.card}
              direction="left"
              exitDirection={exitDirection}
            >
              <span className={styles.text('left')}>
                <Description trip={trip} />
              </span>
            </Card>
          </div>
          <div className={styles.grid3}>
            <Card
              className={styles.map}
              direction="up"
              exitDirection={exitDirection}
            >
              <figure className={styles.figure}>
                <Image
                  alt=""
                  className={styles.image}
                  height="1080"
                  src="2024/06/28/0cf56f29-a903-4756-bb03-40b6b4b2d2fd.webp"
                  width="1920"
                />
                <span
                  className={styles.marker}
                  style={{
                    top: `${trip.coordinates.top}%`,
                    left: `${trip.coordinates.left}%`,
                  }}
                />
              </figure>
            </Card>
          </div>
          <div className={styles.grid4}>
            <Card
              className={styles.explore}
              color={colors.card}
              direction="right"
              exitDirection={exitDirection}
            >
              <button
                className={`${styles.cta} ${colors.cta}`}
                onClick={() => {}}
                type="button"
              >
                <span className={styles.text('right')}>
                  <More trip={trip} />
                </span>
              </button>
            </Card>
          </div>
          <div className={styles.grid5}>
            <Card
              className={styles.previous}
              color={colors.card}
              direction="down"
              exitDirection={exitDirection}
            >
              <button
                className={`${styles.cta} ${colors.navigation}`}
                onClick={handleOnPrevious}
                type="button"
              >
                <span className={styles.text('down')}>
                  Previous
                </span>
              </button>
            </Card>
          </div>
          <div className={styles.grid6}>
            <Card
              className={styles.next}
              color={colors.card}
              direction="down"
              exitDirection={exitDirection}
            >
              <button
                className={`${styles.cta} ${colors.navigation}`}
                onClick={handleOnNext}
                type="button"
              >
                <span className={styles.text('down')}>
                  Next
                </span>
              </button>
            </Card>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.grid7}>
            <Card
              className={styles.what}
              color={colors.card}
              direction="down"
              exitDirection={exitDirection}
            >
              <span className={styles.text('down')}>
                <What trip={trip} />
              </span>
            </Card>
          </div>
          <div className={styles.grid13}>
            <Card
              className={styles.browse}
              color={colors.card}
              direction="right"
              exitDirection={exitDirection}
            >
              <Link
                className={`${styles.cta} ${colors.navigation}`}
                href="/"
              >
                <span className={styles.text('right')}>
                  Browse All Trips
                </span>
              </Link>
            </Card>
          </div>
          <div className={styles.grid9}>
            <Card
              className={styles.preview}
              color={colors.card}
              direction="right"
              exitDirection={exitDirection}
            >
              <Image
                alt=""
                className={styles.image}
                height="1080"
                src={trip.images.small}
                width="1920"
              />
            </Card>
          </div>
          <div className={styles.grid8}>
            <Card
              className={styles.which}
              color={colors.card}
              direction="up"
              exitDirection={exitDirection}
            >
              <span className={styles.text('up')}>
                <Which trip={trip} />
              </span>
            </Card>
          </div>
          <div className={trip.hasGear ? styles.grid10 : styles.grid12}>
            <Card
              className={styles.preview}
              color={colors.card}
              direction="down"
              exitDirection={exitDirection}
            >
              <Image
                alt=""
                className={styles.image}
                height="1080"
                src={trip.images.large}
                width="1920"
              />
            </Card>
          </div>
          {trip.hasGear && (
            <div className={styles.grid11}>
              <Card
                className={styles.gear}
                color={colors.card}
                direction="left"
                exitDirection={exitDirection}
              >
                <button
                  className={`${styles.cta} ${colors.navigation}`}
                  onClick={() => {}}
                  type="button"
                >
                  <span className={styles.text('left')}>
                    View the Gear
                  </span>
                </button>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
