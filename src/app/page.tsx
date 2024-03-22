'use client'

import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';

import styles from 'scss/app/hikes.module.scss'
import { hikes } from 'data/hikes';

export default function Page() {
  const [currentId, setCurrentId] = useState('');

  const handleOnInViewChange = (inView: boolean, id: string) => {
    if (inView) {
      setCurrentId(id);
    }
  };

  const handleOnHikesNavigationClick = (id: string) => {
    document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.container}>
      <section>
        <nav>
          <ul>
            {hikes.map(({ id, title }) => (
              <li data-active={currentId === id} key={id}>
                <button
                  onClick={() => handleOnHikesNavigationClick(id)}
                  type="button"
                >
                  {title.join(' ')}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          {hikes.map(({ backdrop, countries, days, id, image, miles, mountains, title }) => (
            <InView
              key={id}
              onChange={(inView: boolean) => handleOnInViewChange(inView, id)}
              threshold={.75}
            >
              {({ inView, ref }) => (
                <article id={id} ref={ref}>
                  <figure>
                    <Link href={`/experiences/${id}`}>
                      <div
                        style={{ background: backdrop }}
                        imagelessable="true"
                        monochromeable="true"
                      >
                        <img alt={title.join(' ')} src={image} />
                      </div>

                      <figcaption>
                        <span monochromeable="true">
                          {[
                            (mountains ?? []).join('/'),
                            countries.join('/'),
                          ].filter(Boolean).join(', ')}
                        </span>
                        <span>
                          {title.join(' ')}
                        </span>
                        <span>
                          {days} days, {miles} miles
                        </span>
                      </figcaption>
                    </Link>
                  </figure>
                </article>
              )}
            </InView>
          ))}
        </div>
      </section>
    </section>
  );
}
