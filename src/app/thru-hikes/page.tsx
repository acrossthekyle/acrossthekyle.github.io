'use client'

import { useState } from 'react';
import Link from 'next/link';

import { hikes } from 'data/hikes';
import styles from 'scss/app/thru-hikes/page.module.scss';

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

        {hikes.map(({ countries, id, months, mountains, title, years }, idx) => (
          <li onMouseEnter={() => setIndex(idx)} onMouseLeave={() => setIndex(-1)}>
            <Link href={`/thru-hikes/${id}`} key={id}>
              <div>{title.join(' ')}</div>
              <div>
                <span>{months.join(', ')}</span> <span>{years.join(', ')}</span>
              </div>
              <div>{[(mountains ?? []).join('/'), countries.join('/')].filter(Boolean).join(', ')}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.backdrop} />

      {hikes.map(({ countries, id, months, mountains, title, years }, idx) => (
        <div
          className={styles.preview}
          data-active={index === idx}
          role="img"
          style={{ backgroundImage: `url(${hikes[idx].image})` }}
        />
      ))}

      <div className={styles.borders}>
        <div />
        <div />
      </div>
    </article>
  );
};
