'use client'

import { useContext } from 'react';

import { SlotsContext } from 'contexts/slots';
import { hikes } from 'data/hikes';
import styles from 'scss/app/page.module.scss';

export default function Page() {
  const { slotIndex, setSlotIndex } = useContext(SlotsContext);

  const handleOnPrevious = () => {
    setSlotIndex(slotIndex === 0 ? hikes.length - 1 : slotIndex - 1);
  };

  const handleOnNext = () => {
    setSlotIndex(slotIndex === hikes.length - 1 ? 0 : slotIndex + 1);
  };

  return (
    <article className={styles.index}>
      <button className={styles.left} onClick={handleOnPrevious} type="button" />
      <button className={styles.right} onClick={handleOnNext} type="button" />

      {hikes.map(({ id, image }, index) => (
        <div
          aria-labelledBy="slot-label"
          data-active={index === slotIndex}
          key={id}
          role="img"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </article>
  );
}
