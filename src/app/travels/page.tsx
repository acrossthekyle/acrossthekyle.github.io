'use client'

import { useState } from 'react';
import Link from 'next/link';

import travels from 'data/travels';
import styles from 'scss/app/travels/page.module.scss';

export default function Page() {
  const [index, setIndex] = useState(-1);

  return (
    <article className={styles.travels}>
      <ul>
        <li>
          <div>Name</div>
          <div>Date</div>
          <div>Location</div>
        </li>

        {travels.map(({ countries, id, months, locations, title, year }, idx) => (
          <li key={id} onMouseEnter={() => setIndex(idx)} onMouseLeave={() => setIndex(-1)}>
            <Link href={`/travels/${year}/${id}`} key={id}>
              <div>{title.join(' ')}</div>
              <div>
                <span>{months.join(', ')}</span> <span>{year}</span>
              </div>
              <div>{[(locations ?? []).join('/'), countries.join('/')].filter(Boolean).join(', ')}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.backdrop} />

      {travels.map(({ id, image }, idx) => (
        <div
          className={styles.preview}
          data-active={index === idx}
          key={id}
          role="img"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className={styles.borders}>
        <div />
        <div />
      </div>
    </article>
  );
};
