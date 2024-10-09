'use client';

import { truncate } from 'lodash';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/pages/shop/index.module.scss';
import Image from '@/ui/image';
import View from '@/ui/view';

import prints from '../../prints';

type PrintProps = {
  image: string;
  snippet: string;
  title: string;
  uri: string;
};

function Print({ image, snippet, title, uri }: PrintProps) {
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
            <h2>
              <Link className={styles.title} href={uri}>
                {title}
              </Link>
            </h2>
            <p className={styles.preview}>
              {truncate(snippet, { length: 156, separator: ' ' })}
            </p>
          </figcaption>
        </figure>
      )}
    </InView>
  );
}

function Page() {
  return (
    <View>
      <Head>
        <title>Kyle &mdash; Shop Prints</title>
      </Head>
      <div className={styles.container}>
        <div data-backdrop data-backdrop-active="false" />
        <h1 className={styles.heading}>Shop</h1>
        <p className={styles.paragraph}>
          I've been on several backpacking thru-hikes all around the world, from
          Patagonia in the southern tip of South America to the heights of the
          Himalayas in Nepal. The items for sale in this shop are either moments
          captured by me while marching through forests and over mountain-tops,
          or inspired by the nature of this planet.
        </p>
        <div className={styles.items}>
          {prints.items.map((print) => (
            <Print {...print} key={print.uri} />
          ))}
        </div>
      </div>
    </View>
  );
}

export default Page;
