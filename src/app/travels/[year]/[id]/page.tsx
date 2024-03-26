'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { EventsContext } from 'contexts/events';
import travels from 'data/travels'
import styles from 'scss/app/travels/travel/page.module.scss';

export default function Page({ params }) {
  const travel = travels.find(({ id, year }) => id === params.id && String(year) === params.year);

  const [renderShare, setRenderShare] = useState(false);

  const { registerEventListener } = useContext(EventsContext);

  useEffect(() => {
    registerEventListener(handleEvent);
  }, []);

  const handleEvent = (event: any) => {
    if (event === 'share') {
      setRenderShare(true);
    } else {
      setRenderShare(false);
    }
  };

  return (
    <article className={styles.travel}>
      <div
        aria-labelledby="image-label"
        className={styles.image}
        key={travel.id}
        role="img"
        style={{ backgroundImage: `url(${travel.image})` }}
      >
        <div className={styles.share} data-active={renderShare}>
          <h4>Link</h4>
          <Link href={`/travels/${travel.year}/${travel.id}`}>
            {`https://acrossthekyle.com/travels/${travel.year}/${travel.id}`}
          </Link>
        </div>
      </div>
    </article>
  );
}
