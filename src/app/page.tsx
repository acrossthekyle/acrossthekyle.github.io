'use client'

import { useContext } from 'react';
import Link from 'next/link';

import { SlotsContext } from 'contexts/slots';
import travels from 'data/travels';
import styles from 'scss/app/page.module.scss';

export default function Page() {
  const { slotIndex, setSlotIndex } = useContext(SlotsContext);

  const handleOnPrevious = () => {
    setSlotIndex(slotIndex === 0 ? travels.length - 1 : slotIndex - 1);
  };

  const handleOnNext = () => {
    setSlotIndex(slotIndex === travels.length - 1 ? 0 : slotIndex + 1);
  };

  return (
    <article className={styles.index}>
      <button className={styles.left} onClick={handleOnPrevious} type="button" />
      <button className={styles.right} onClick={handleOnNext} type="button" />

      {travels.map(({ id, image, year }, index) => (
        <Link href={`/travels/${year}/${id}`} key={id}>
          <div
            aria-labelledby="slot-label"
            data-active={index === slotIndex}
            key={id}
            role="img"
            style={{ backgroundImage: `url(${image})` }}
          />
        </Link>
      ))}
    </article>
  );
}
