import { useCallback, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import Styles from '@/styles';
import type { Components } from '@/types';

import Categories from './categories';
import Image from './image';

const scss = Styles.Components.MasonryArticle;

type Props = Components.MasonryItem;

function Article({
  categories,
  date,
  image,
  readingTime,
  snippet,
  title,
  uri,
}: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

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
        <article className={scss.article} data-in-view={hasEnteredView}>
          <Link aria-hidden="true" className={scss.cover} href={uri} ref={ref}>
            <Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={image}
              width={768}
            />
          </Link>
          <section className={scss.content}>
            <header>
              <Categories items={categories} />
              <h2>
                <Link href={uri}>{title}</Link>
              </h2>
            </header>
            {snippet && (
              <section>
                <p>{truncate(snippet, { length: 156, separator: ' ' })}..</p>
              </section>
            )}
            <footer>
              {date && <time>{date}</time>}
              {readingTime && <span>{Math.ceil(readingTime)} Min Read</span>}
            </footer>
          </section>
        </article>
      )}
    </InView>
  );
}

export default Article;
