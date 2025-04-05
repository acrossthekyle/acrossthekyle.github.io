'use client';

import { InView } from 'react-intersection-observer';
import Link from 'next/link';

import Components from '@/components';
import Styles from '@/styles';
import type { Store } from '@/types';

import { useViewModel } from './page.component.card.viewModel';

const scss = Styles.Pages.Store.PageComponentCard;

type Props = {
  item?: Store.Page.Item;
};

function Card({ item }: Props) {
  const { handleOnInView, hasEnteredView, uuid } = useViewModel();

  if (!item) {
    return null;
  }

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
            <Components.Button href={item.uri} text="Purchase" />
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Card;
