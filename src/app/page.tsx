'use client'

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { EventsContext } from 'contexts/events';
import travels from 'data/travels';
import styles from 'scss/app/page.module.scss';

export default function Page() {
  const { fireEvent } = useContext(EventsContext);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    fireEvent(index);
  }, [index]);

  const handleOnPrevious = () => {
    setIndex(index === 0 ? travels.length - 1 : index - 1);
  };

  const handleOnNext = () => {
    setIndex(index === travels.length - 1 ? 0 : index + 1);
  };

  return (
    <article className={styles.index}>
      <button className={styles.left} onClick={handleOnPrevious} type="button" />
      <button className={styles.right} onClick={handleOnNext} type="button" />

      {travels.map(({ id, image, year }, idx) => (
        <Link href={`/travels/${year}/${id}`} key={id}>
          <div
            aria-labelledby="slot-label"
            data-active={idx === index}
            key={id}
            role="img"
            style={{ backgroundImage: `url(${image})` }}
          />
        </Link>
      ))}
    </article>
  );
}
