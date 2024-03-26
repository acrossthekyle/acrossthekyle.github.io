'use client'

import { useContext, useEffect, useState } from 'react';

import { EventsContext } from 'contexts/events';
import travels from 'data/travels'
import styles from 'scss/app/travels/travel/page.module.scss'

export default function Page({ params }) {
  const travel = travels.find(({ id, year }) => id === params.id && String(year) === params.year);

  const [renderInfo, setRenderInfo] = useState(false);
  const [renderShare, setRenderShare] = useState(false);
  const [renderStats, setRenderStats] = useState(false);

  const { fireEvent } = useContext(EventsContext);

  useEffect(() => {
    fireEvent(renderShare ? 'share' : '');
  }, [renderShare]);

  return (
    <section className={styles.slot}>
      <div className={styles.description}>
        {renderInfo && (
          <p>
            Some info
          </p>
        )}
        {renderStats && (
          <p>
            Some stats
          </p>
        )}
      </div>
      <div className={styles.options}>
        <button
          onClick={() => setRenderStats(!renderStats)}
          type="button"
        >
          Stats
        </button>
        <button
          onClick={() => setRenderStats(!renderInfo)}
          type="button"
        >
          Info
        </button>
        <button
          onClick={() => setRenderShare(!renderShare)}
          type="button"
        >
          Share
        </button>
        <span id="image-label">
          {travel.title.join(' ')}
        </span>
      </div>
    </section>
  );
}
