'use client'

import { useState } from 'react';
import Link from 'next/link';

import adventures from 'data/adventures';
import styles from 'scss/app/adventures/page.module.scss';

export default function Page() {
  const [index, setIndex] = useState(-1);

  return (
    <article className={styles.thrus}>
      <ul>
        <li>
          <div>Name</div>
          <div>Date</div>
          <div>Location</div>
        </li>

        {adventures.map(({ countries, id, months, locations, title, years }, idx) => (
          <li key={id} onMouseEnter={() => setIndex(idx)} onMouseLeave={() => setIndex(-1)}>
            <Link href={`/adventures/${id}`} key={id}>
              <div>{title.join(' ')}</div>
              <div>
                <span>{months.join(', ')}</span> <span>{years.join(', ')}</span>
              </div>
              <div>{[(locations ?? []).join('/'), countries.join('/')].filter(Boolean).join(', ')}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.backdrop} />

      {adventures.map(({ id, image }, idx) => (
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
