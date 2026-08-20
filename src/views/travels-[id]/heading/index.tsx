import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  collection: Collection;
};

export default function Heading({ collection }: Props) {
  return (
    <header className={styles.container}>
      <h1 className={styles.header}>
        <span className={styles.eyebrow}>
          {collection.category} &mdash; {collection.location.country}
        </span>
        <span className={styles.title}>
          {collection.header.join(' ')}
        </span>
        <span className={styles.lid}>
          {collection.when.long[0]} to {collection.when.long[1]}
        </span>
      </h1>
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0
    flex flex-col justify-end
    h-svh
    p-6

    lg:border-r
    lg:border-current/12.5
  `,
  header: `
    flex flex-col justify-end gap-1
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
    mt-1
    text-tiny
    tracking-widest

    sm:text-xtiny
  `,
});
