'use client';

import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { truncate } from 'lodash';
import Link from 'next/link';

import posts from '../posts';

import styles from '@/styles/ui/travels.module.scss';

import Button from './button';
import Image from './image';

type Props = {
  tag?: string;
};

type TravelProps = {
  date: string;
  locationShort: string;
  image: string;
  snippet: string;
  tags: string;
  title: string;
  uri: string;
};

function Travel({
  date,
  image,
  locationShort,
  snippet,
  tags,
  title,
  uri,
}: TravelProps) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleOnInView = (inView: boolean) => {
    if (!hasEnteredView && inView) {
      setHasEnteredView(true);
    }
  };

  return (
    <InView onChange={handleOnInView} threshold={0.1}>
      {({ ref }) => (
        <figure className={styles.item} data-in-view={hasEnteredView}>
          <Link className={styles.image} href={uri} ref={ref}>
            <Image
              alt={title}
              height={432}
              sizes="(max-width: 768px) 100vw, 33vw"
              src={image}
              width={768}
            />
          </Link>
          <figcaption className={styles.caption}>
            <div className={styles.tags}>
              {tags.split(',').map((tag: string) => (
                <Link
                  className={styles.tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  key={tag}
                >
                  {tag}
                </Link>
              ))}
            </div>
            <h2>
              <Link className={styles.title} href={uri}>
                {title}
              </Link>
            </h2>
            {!!snippet && (
              <p className={styles.preview}>
                {truncate(snippet, { length: 156, separator: ' ' })}
                ..
              </p>
            )}
            <div className={styles.context}>
              <div className={styles.content}>
                <Link className={styles.author} href="/about">
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
                <div className={styles.info}>
                  Kyle Gilbert
                  <span className={styles.divider}>•</span>
                  <time>{date}</time>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

function Travels({ tag }: Props) {
  const all = posts.getArray().filter(({ tags }) => {
    if (!!tag) {
      return tags.includes(tag);
    }

    return true;
  });

  const [shown, setShown] = useState(9);

  const handleOnViewMore = () => {
    setShown(posts.getTotal());
  };

  return (
    <div className={styles.view} id="posts">
      {!!tag && <p className={styles.total}>{all.length} Articles</p>}
      {!!tag && <h1 className={styles.header}>{tag}</h1>}
      <div className={styles.items}>
        {all.splice(0, shown).map((post) => (
          <Travel {...post} key={post.uri} />
        ))}
      </div>
      {!tag && shown === 9 && (
        <div className={styles.footer}>
          <Button
            className={styles.more}
            onClick={handleOnViewMore}
            text="Load More Posts"
          />
        </div>
      )}
    </div>
  );
}

export default Travels;
