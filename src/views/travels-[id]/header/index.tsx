'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { InView } from 'react-intersection-observer';

import type { Collection } from '@/types';
import { Ui } from '@/ui';

import { styles } from './stylesheet';

type Props = {
  collection: Collection;
  index: number;
};

export default function Header({ collection, index }: Props) {
  const router = useRouter();

  return (
    <>
      <h1 className={styles.title(index)}>
        {collection.title.join(' ')}
        <span className={styles.when}>
          {collection.when.long[0]} to {collection.when.long[1]}
        </span>
      </h1>
      <section className={styles.overview}>
        <h2 className={styles.header}>{collection.header.join(' ')}</h2>
        {collection.notes.map((note) => (
          <p className={styles.note} key={note}>{note}</p>
        ))}
      </section>
      <p className={styles.info}>
        <span className={styles.location}>
          {collection.location.region} • {collection.location.country}
        </span>
        <span className={styles.category}>
          {collection.category} &mdash; {collection.location.continent}
        </span>
      </p>
      <InView threshold={0.1} triggerOnce>
        {({ inView, ref }) => (
          <figure className={styles.cover(inView)} ref={ref}>
            <Ui.Image
              className={styles.hero}
              src={collection.cover.src}
              thumb={collection.cover.thumb || ''}
            />
          </figure>
        )}
      </InView>
      <button className={styles.back} onClick={router.back} type="button">
        <X className={styles.x} />
      </button>
    </>
  );
}
