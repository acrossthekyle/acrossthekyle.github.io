import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import Constants from '@/constants';
import Styles from '@/styles';
import type { Components } from '@/types';

import Image from './image';
import Tags from './tags';
import { useViewModel } from './masonry.figure.viewModel';

const scss = Styles.Components.Figure;

type Props = Components.MasonryItem;

function Figure({ date, image, snippet, tags, title, uri }: Props) {
  const { handleOnInView, hasEnteredView, uuid } = useViewModel();

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
            <Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={image}
              width={768}
            />
          </Link>
          <figcaption className={scss.caption}>
            {tags && <Tags className={scss.tags} items={tags} />}
            <h2 id={uuid}>
              <Link className={scss.title} href={uri}>
                {title}
              </Link>
            </h2>
            {snippet && (
              <p className={scss.preview}>
                {truncate(snippet, { length: 156, separator: ' ' })}
                <Link href={uri}>
                  <span aria-hidden="true">..</span>
                  <span>more</span>
                </Link>
              </p>
            )}
            {date && (
              <div className={scss.context}>
                <Link
                  aria-label="About Kyle"
                  className={scss.author}
                  href="/me"
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    height={20}
                    quality={30}
                    sizes="5vw"
                    src={Constants.ME_URL}
                    width={20}
                  />
                </Link>
                <div className={scss.info}>
                  <span aria-hidden="true">Kyle Gilbert</span>
                  <span aria-hidden="true" className={scss.divider}>
                    •
                  </span>
                  <time>{date}</time>
                </div>
              </div>
            )}
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

export default Figure;
