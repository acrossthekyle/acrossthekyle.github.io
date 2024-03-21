'use client'

import { useState } from 'react';
import Link from 'next/link';

import styles from 'scss/app/hikes.module.scss'
import { hikes, hikesByYear } from 'data/hikes';

export default function Page() {
  const [isGallery, toggleIsGallery] = useState(false);

  const handleOnGalleryToggle = () => {
    toggleIsGallery(!isGallery);
  };

  return (
    <section className={styles.hikes}>
      <nav className={styles.links}>
        <h2 className={styles.heading}>Hikes</h2>
        <div className={styles.wrapper}>
          {hikesByYear.map(({ year, hikes }) => (
            <>
              <h3 className={styles.year}>{year}</h3>
              <ul className={styles.items}>
              {hikes.map(({ title }) => (
                <li active={title.includes('Camino') ? 'true' : 'false'}>
                  <button className={styles.item} type="button">
                    {title.join(' ')}
                  </button>
                </li>
              ))}
              </ul>
            </>
          ))}
        </div>
        <button className={styles.as} onClick={handleOnGalleryToggle} type="button">
          Gallery [ {isGallery ? 'Y' : 'N'} ]
        </button>
      </nav>
      {hikes.map(({ countries, days, id, miles, title }) => (
        <article className={styles.hike} id={id}>
          <figure>
            <figcaption>
              {countries.join(', ')}
              {title.join(' ')}
              {days} days
              {miles} miles
            </figcaption>
          </figure>
        </article>
      ))}
      <nav className={styles.pages}>
        <Link active="true" href="/">Experiences</Link>
        <Link href="/about">About</Link>
      </nav>
    </section>
  );
}
