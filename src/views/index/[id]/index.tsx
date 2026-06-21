'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef, WheelEvent } from 'react';
import { InView } from 'react-intersection-observer';

import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';
import { padIndex, trimCardinal } from '@/utils';

import Map from './map';
import { styles } from './stylesheet';

type Props = {
  data: {
    images: Image[];
    collection: Collection;
  };
};

export default function View({ data }: Props) {
  const router = useRouter();

  const scrollable = useRef<HTMLElement>(null);

  const total = data.images.length;

  const handleOnWheel = (event: WheelEvent<HTMLElement>) => {
    if (!scrollable.current) {
      return;
    }

    scrollable.current.scrollLeft += event.deltaY;
  };

  return (
    <article className={styles.container}>
      <button className={styles.back} onClick={router.back} type="button">
        <X className={styles.arrow} />
      </button>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {data.collection.title.map((chunk) => (
            <span key={chunk}>{chunk}</span>
          ))}
        </h1>
        <p className={styles.location}>
          <span className={styles.region}>
            {data.collection.location.region}
          </span>
          <span>
            {data.collection.location.country} &mdash; {trimCardinal(data.collection.location.continent)}
          </span>
        </p>
        <span className={styles.coordinates}>
          {data.collection.coordinates}
        </span>
        <span className={styles.timeline}>
          <span>{data.collection.when.short[0]}</span>
          <span className={styles.span} />
          <span>{data.collection.when.short[1]}</span>
        </span>
      </header>
      <section
        aria-label="image carousel"
        className={styles.carousel}
        onWheel={handleOnWheel}
        ref={scrollable}
      >
        <ul className={styles.items}>
          {data.images.map((image, index) => (
            <InView
              key={image.src}
              threshold={0.1}
              triggerOnce
            >
              {({ inView, ref }) => (
                <li className={styles.item(inView, index)} key={image.id} ref={ref}>
                  <figure className={styles.figure(index)}>
                    <Ui.Image
                      className={styles.image(inView)}
                      src={image.src}
                      thumb={image.thumb}
                    />
                    <figcaption className={styles.caption}>
                      <span className={styles.when}>
                        <Ui.Units.Length isSmall value={image.elevation} />
                      </span>
                      <span className={styles.label}>
                        {image.title || image.location.region}
                      </span>
                      <span className={styles.index}>
                        {padIndex(index + 1)} / {padIndex(total)}
                      </span>
                    </figcaption>
                  </figure>
                  {index === 0 && (
                    <div className={styles.total}>
                      <span className="absolute top-4 right-full text-[7rem]">,</span>
                      {image.when.short[0].split('.').pop()}
                    </div>
                  )}
                  {index === 1 && (
                    <div className={styles.notes(0)}>
                      <p className={styles.paragraph}>
                        {data.collection.notes[0]}
                      </p>
                    </div>
                  )}
                  {index === 2 && (
                    <div className={styles.notes(1)}>
                      <p className={styles.paragraph}>
                        {data.collection.notes[1]}
                      </p>
                    </div>
                  )}
                </li>
              )}
            </InView>
          ))}
        </ul>
      </section>
    </article>
  );
}
