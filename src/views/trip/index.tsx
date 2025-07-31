'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

import Footer from './footer';
import Stats from './stats';
import Timeline from './timeline';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { trip } = useModel(slug);

  if (!trip) {
    return null; // todo - add loading state
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {trip.title}
        </h1>
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
        <figure className={styles.hero}>
          <Image
            alt=""
            className={styles.image}
            height="1080"
            src={trip.images.hero}
            width="1920"
          />
          <figcaption className={styles.location}>
            {trip.location}
          </figcaption>
        </figure>
        <h2 className={styles.intro}>
          {trip.description[0]}
        </h2>
        <Stats trip={trip} />
        <Timeline trip={trip} />
      </section>
      <Footer trip={trip} />
    </article>
  );
}
