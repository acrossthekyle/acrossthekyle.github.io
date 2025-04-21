'use client';

import { useId, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';

import Components from '@/components';
import Styles from '@/styles';
import type { Store } from '@/types';

const scss = Styles.Components.Store.Card;

type Props = {
  item: Store.Page.Item;
};

function Card({ item }: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const uuid = useId();

  const handleOnInView = (isInView: boolean) => {
    if (!hasEnteredView && isInView) {
      setHasEnteredView(true);
    }
  };

  return (
    <InView onChange={handleOnInView} threshold={0.1}>
      {({ ref }) => (
        <figure className={scss.figure} data-in-view={hasEnteredView}>
          <Link
            aria-describedby={uuid}
            className={scss.image}
            href={item.uri}
            ref={ref}
          >
            <Components.Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={item.image}
              width={768}
            />
          </Link>
          <figcaption className={scss.caption}>
            <h2 id={uuid}>
              <Link href={item.uri}>{item.title}</Link>
            </h2>
            <p>From ${item.price}</p>
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Card;
