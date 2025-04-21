'use client';

import { useId, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';

import Components from '@/components';
import Styles from '@/styles';

const scss = Styles.Components.Store.Card;

type Props = {
  image: string;
  price: string;
  title: string;
  uri: string;
};

function Card({ image, price, title, uri }: Props) {
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
            href={uri}
            ref={ref}
          >
            <Components.Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={image}
              width={768}
            />
          </Link>
          <figcaption className={scss.caption}>
            <h2 id={uuid}>
              <Link href={uri}>{title}</Link>
            </h2>
            <p>From ${price}</p>
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Card;
