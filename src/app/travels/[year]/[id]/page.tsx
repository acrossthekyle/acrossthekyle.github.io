'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { SlotsContext } from 'contexts/slots';
import travels from 'data/travels'
import styles from 'scss/app/travels/travel/page.module.scss';

export default function Page({ params }) {
  const travel = travels.find(({ id, year }) => id === params.id && String(year) === params.year);

  const { registerSlotEventListener } = useContext(SlotsContext);

  useEffect(() => {
    registerSlotEventListener(handleSlotEvent);
  }, []);

  const handleSlotEvent = (event: any) => {
    console.log('event: ', event);
  };

  return (
    <article className={styles.travel}>
      <div
        aria-labelledby="image-label"
        key={travel.id}
        role="img"
        style={{ backgroundImage: `url(${travel.image})` }}
      />
      <div className={styles.share}>
        <h4>URL</h4>
        <Link href={`/travels/${travel.year}/${travel.id}`} />
      </div>
    </article>
  );
}
