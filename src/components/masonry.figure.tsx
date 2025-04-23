import { ReactNode, useCallback, useId, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import Constants from '@/constants';
import Styles from '@/styles';
import type { Components } from '@/types';

import Categories from './categories';
import Image from './image';

const scss = Styles.Components.MasonryFigure;

type Props = Components.MasonryItem;

function Figure({ categories, date, image, snippet, title, uri }: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const uuid = useId();

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      if (!hasEnteredView && isInView) {
        setHasEnteredView(true);
      }
    },
    [hasEnteredView],
  );

  return (
    <InView onChange={handleOnInView} threshold={0.1}>
      {({ ref }) => (
        <figure className={scss.figure} data-in-view={hasEnteredView}>
          {!!image && (
            <Link
              aria-describedby={uuid}
              className={scss.link}
              href={uri}
              ref={ref}
            >
              <Image
                alt=""
                height={432}
                sizes="(max-width: 768px) 100vw, 33vw"
                src={image}
                width={768}
              />
            </Link>
          )}
          <figcaption>
            {categories && (
              <Categories className={scss.categories} items={categories} />
            )}
            <h2 id={uuid}>
              <Link className={scss.title} href={uri}>
                {title}
              </Link>
            </h2>
            {date && <time>{date}</time>}
            {snippet && (
              <p>
                {truncate(snippet, { length: 156, separator: ' ' })}
                <span aria-hidden="true">..</span>
              </p>
            )}
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Figure;
