'use client';

import { ReactNode, useId, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import styles from '@/styles/components/shop/card.module.scss';
import type { Print } from '@/types';

import Button from '../button';
import Image from '../image/image';

type Props = {
  item: Print;
};

function Figure({ item }: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const uuid = useId();

  const handleOnInView = (inView: boolean) => {
    if (!hasEnteredView && inView) {
      setHasEnteredView(true);
    }
  };

  return (
    <InView onChange={handleOnInView} threshold={0.1}>
      {({ ref }) => (
        <figure className={styles.figure} data-in-view={hasEnteredView}>
          <Link
            aria-describedby={uuid}
            className={styles.image}
            href={item.uri}
            ref={ref}
          >
            <Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={item.image}
              width={768}
            />
          </Link>
          <figcaption className={styles.caption}>
            <p aria-level="2" id={uuid} role="heading">{item.title}</p>
            <p>From $100.00</p>
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Figure;
