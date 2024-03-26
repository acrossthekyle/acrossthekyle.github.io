'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { EventsContext } from 'contexts/events';
import travels from 'data/travels'
import styles from 'scss/app/travels/travel/page.module.scss';
import { getTravelId, getTravelIdIndex } from 'utils';

export default function Page({ params }) {
  const travelId = getTravelId(params.id);
  const travelIdIndex = getTravelIdIndex(params.id);

  const travel = travels.find(({ id, year }) => id === travelId && String(year) === params.year);

  const [renderShare, setRenderShare] = useState(false);
  const [renderThumbnails, setRenderThumbnails] = useState(false);

  const { registerEventListener } = useContext(EventsContext);

  const router = useRouter();

  useEffect(() => {
    registerEventListener(handleEvent);
  }, []);

  const handleEvent = (event: any) => {
    setRenderThumbnails(event === 'thumbnails');
    setRenderShare(event === 'share');
  };

  const handleOnPrevious = () => {
    const index = travelIdIndex === 1 ? travel.itinerary.length : travelIdIndex - 1;

    router.push(`/travels/${params.year}/${travelId}-${String(index).padStart(3, '0')}`);
  };

  const handleOnNext = () => {
    const index = travelIdIndex === travel.itinerary.length ? 1 : travelIdIndex + 1;

    router.push(`/travels/${params.year}/${travelId}-${String(index).padStart(3, '0')}`);
  };

  return (
    <article className={styles.travel}>
      {!renderShare && !renderThumbnails && travel.itinerary && (
        <>
          <button
            className={styles.left}
            onClick={handleOnPrevious}
            title="Previous"
            type="button"
          />
          <button
            className={styles.right}
            onClick={handleOnNext}
            title="Next"
            type="button"
          />
        </>
      )}

      {!renderThumbnails && (
        <div
          aria-labelledby="image-label"
          className={styles.image}
          key={travel.id}
          role="img"
          style={{ backgroundImage: `url(${travel.image})` }}
        >
          <div className={styles.share} data-active={renderShare}>
            <h4>Link</h4>
            <Link href={`/travels/${params.year}/${params.id}`}>
              {`https://acrossthekyle.com/travels/${params.year}/${params.id}`}
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
