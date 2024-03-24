'use client'

import { useContext } from 'react';
import Link from 'next/link';

import { SlotsContext } from 'contexts/slots';
import { hikes } from 'data/hikes'
import styles from 'scss/app/page.module.scss'

export default function Page() {
  const { slotIndex, setSlotIndex } = useContext(SlotsContext);

  return (
    <section className={styles.slot}>
      <Link href={`/thru-hikes/${hikes[slotIndex].id}`}>
        <span id="slot-label">{hikes[slotIndex].title.join(' ')}</span>
      </Link>
      <span>
        {slotIndex + 1}/{hikes.length}
      </span>
    </section>
  );
}
