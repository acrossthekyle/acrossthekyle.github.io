import { Navigation } from '@/layout';
import tw from '@/styles';
import type { Collection } from '@/types';

import Others from './others';

type Props = {
  collection: Collection;
  next: Collection;
  previous: Collection;
};

export default function Header({ collection, next, previous }: Props) {
  return (
    <header className={styles.container}>
      <Navigation />
      <h1 className={styles.header}>
        <span className={styles.eyebrow}>{collection.category} &mdash; {collection.location.country}</span>
        <span className={styles.title}>
          {collection.header.join(' ')}
        </span>
        <span className={styles.lid}>
          {collection.when.long[0]} to {collection.when.long[1]}
        </span>
        <span className={styles.tag}>{collection.category}</span>
      </h1>
      <Others next={next} previous={previous} />
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0

    lg:border
    lg:border-current/12.5
  `,
  header: `
    flex flex-col justify-end gap-1
    h-[calc(100svh-6.7rem)]
    p-6
    uppercase
  `,
  eyebrow: `
    block
    mb-1
    font-mono
    text-tiny

    sm:text-xtiny
  `,
  title: `
    text-[min(8vw,1.75rem)]
    leading-[1]
    font-black

    sm:text-[min(4vw,1.75rem)]
    sm:leading-[0.8]
  `,
  lid: `
    block
    mt-1 mb-2
    text-tiny
    tracking-widest

    sm:text-xtiny
  `,
  tag: `
    relative -left-0.5
    self-start
    text-tiny
    rounded-sm
    border border-current/22.5
    p-1 py-0.25
    normal-case
  `,
});
