import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import Styles from '@/styles';

import Image from './image';
import Tags from './tags';
import { useViewModel } from './figure.viewModel';

const scss = Styles.Components.Figure;

type Props = {
  date?: string;
  image: string;
  price?: string;
  snippet?: string;
  tags?: string[];
  title: string;
  uri: string;
};

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
                    src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
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
