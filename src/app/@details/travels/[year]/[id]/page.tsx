'use client'

import { useState } from 'react';

import travels from 'data/travels'
import styles from 'scss/app/travels/travel/page.module.scss'

export default function Page({ params }) {
  const travel = travels.find(({ id, year }) => id === params.id && String(year) === params.year);

  return (
    <section className={styles.slot}>
      <p>
        Some description
      </p>
      <button type="button">Stats</button>
      <button type="button">Info</button>
      <button type="button">Share</button>
      <div className={styles.travel} id="image-label">
        {travel.title.join(' ')}
      </div>
    </section>
  );
}
