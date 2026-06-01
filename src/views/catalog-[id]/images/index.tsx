'use client';

import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDialog } from '@/hooks/useDialog';
import type { Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  images: Array<Data[]>;
  total: number;
};

export default function Images({ images, total }: Props) {
  const { onDialog } = useDialog();

  const [tiltAngle, setTiltAngle] = useState(0);

  const top = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > top.current) {
        setTiltAngle(14);
      } else if (currentScrollTop < top.current) {
        setTiltAngle(-14);
      }

      top.current = currentScrollTop <= 0 ? 0 : currentScrollTop;

      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        setTiltAngle(0);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const handleOnClick = (image: Data) => {
    onDialog({
      data: {
        image,
        uuid: uuidv4(),
      },
    });
  };

  let globalIndex = 0;

  return (
    <section aria-label="images">
      {images.map((chunk, index) => (
        <div
          className={styles.group}
          key={index}
        >
          {chunk.map((image, key) => {
            ++globalIndex;

            return (
              <figure
                className={styles.figure(index, key)}
                key={key}
                style={{ perspective: '1000px' }}
              >
                <button
                  className={styles.cta}
                  onClick={() => handleOnClick(image)}
                  style={{
                    transform: `rotateX(${tiltAngle}deg)`,
                  }}
                  type="button"
                >
                  <Ui.Image
                    className={styles.image}
                    src={image.src}
                    thumb={image.thumb}
                  />
                </button>
                <figcaption className={styles.caption}>
                  <span className={styles.index}>
                    <span className={styles.strong}>
                      {padIndex(globalIndex)}
                    </span>
                    <span>/ {padIndex(total)}</span>
                  </span>
                  {image.when.split(', ').map((chunk) => (
                    <span className={styles.chunk} key={chunk}>{chunk}</span>
                  ))}
                  <span className={styles.meta}>
                    <span>{image.src.split('-').pop()}</span>
                    <span>
                      {image.location.region}, {image.location.country}
                    </span>
                    <Ui.Units.Length isSmall value={image.elevation} />
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      ))}
    </section>
  );
}
