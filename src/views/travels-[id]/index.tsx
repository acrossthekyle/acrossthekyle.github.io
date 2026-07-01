'use client';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { WheelEvent, useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import { SIZES } from './constants';
import { styles } from './stylesheet';

type Props = {
  data: {
    collection: Collection;
    images: Image[];
  };
};

export default function View({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOnWheel = (event: WheelEvent<HTMLFormElement>) => {
    const container = sectionRef.current;

    if (window.innerWidth <= 640) {
      return;
    }

    if (!container || showMore) {
      return;
    }

    if (event.deltaY !== 0) {
      event.preventDefault();

      container.scrollLeft += event.deltaY;
    }
  };

  const handleOnZoom = (id: string) => {
    if (showMore) {
      setShowMore(false);

      return;
    }

    setActiveId(activeId !== null ? null : id);
  };

  const handleOnMore = () => {
    setShowMore((previous) => !previous);
  };

  return (
    <main className={styles.container}>
      <section className={styles.info(showMore)}>
        <h2 className={styles.heading}>
          <span className={styles.title}>{data.collection.title.join(' ')}</span>
          <span className={styles.category}>{data.collection.category}</span>
        </h2>
        <div className={styles.inner}>
          {data.collection.notes.map((paragraph) => (
            <p className={styles.paragraph} key={paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={styles.paragraph}>
            {data.collection.when.long[0]} to {data.collection.when.long[1]}<br />
            {data.collection.location.region} &mdash; {data.collection.location.country}<br />
            {data.collection.location.continent}
          </p>
        </div>
        <button
          className={styles.more}
          onClick={handleOnMore}
          type="button"
        >
          {!showMore && <ArrowDown className={styles.arrow} />}
          {showMore && <ArrowUp className={styles.arrow} />}
          <span>
            {showMore ? 'Close' : 'More'} information
          </span>
        </button>
      </section>
      <section
        className={styles.carousel(showMore)}
        onWheel={handleOnWheel}
        ref={sectionRef}
      >
        <ul className={styles.items}>
          {data.images.map((image, index) => {
            const isActive = activeId === image.id;
            const size = SIZES[index % SIZES.length];

            return (
              <li key={image.id}>
                <InView key={image.id} threshold={0.1} triggerOnce>
                  {({ inView, ref }) => (
                    <figure
                      className={`${styles.figure(inView)} ${size.defaultWidth}`}
                      ref={ref}
                      style={{
                        aspectRatio: size.ratio,
                        width: isActive ? `${(viewportHeight + 10) * size.ratio}px` : undefined,
                      }}
                    >
                      <button
                        className={styles.toggle}
                        onClick={() => handleOnZoom(image.id)}
                        type="button"
                      >
                        <Ui.Image
                          src={image.src}
                          thumb={image.thumb}
                        />
                      </button>
                      <figcaption className={styles.caption}>
                        <span className={styles.index}>
                          {padIndex(index + 1)} / {padIndex(data.images.length)}
                        </span>
                        <span className={styles.country}>
                          {image.location.country}
                        </span>
                        <span className={styles.location}>
                          {image.title || image.location.region}
                        </span>
                        <span className={styles.elevation}>
                          <Ui.Units.Length isSmall value={image.elevation} />
                        </span>
                      </figcaption>
                    </figure>
                  )}
                </InView>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
