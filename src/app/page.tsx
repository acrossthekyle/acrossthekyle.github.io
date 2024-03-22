'use client'

import { Fragment, useState } from 'react';
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
            <Fragment key={year}>
              <h3 className={styles.year}>{year}</h3>
              <ul className={styles.items}>
              {hikes.map(({ id, title }) => (
                <li active={title.includes('Camino') ? 'true' : 'false'} key={`${year}-${id}`}>
                  <button className={styles.item} type="button">
                    {title.join(' ')}
                  </button>
                </li>
              ))}
              </ul>
            </Fragment>
          ))}
        </div>
        <button className={styles.as} onClick={handleOnGalleryToggle} type="button">
          (G)allery [ {isGallery ? 'Y' : 'N'} ]
        </button>
      </nav>
      {hikes.map(({ backdrop, countries, days, id, image, miles, mountains, title }) => (
        <article className={styles.hike} id={id} key={id}>
          <figure>
            <figcaption>
              <span className={styles.location} monochromeable="true">
                {[
                  (mountains ?? []).join('/'),
                  countries.join('/'),
                ].filter(Boolean).join(', ')}
              </span>
              <span className={styles.name}>
                {title.join(' ')}
              </span>
              <span className={styles.stats}>{days} days, {miles} miles</span>
            </figcaption>
            <div className={styles.image} imagelessable="true" monochromeable="true">
              <div style={{ background: backdrop }} />
              <img src={image} />
            </div>
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
