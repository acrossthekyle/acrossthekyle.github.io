import { Header } from '@/layout';
import tw from '@/styles';
import type { Collection } from '@/types';

import Back from './back';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header collections={data.collections} />
      <main className={styles.container}>
        <h1 className={styles.header}>
          <span className={styles.eyebrow}>
            Error Code: 404
          </span>
          <span className={styles.title}>
            Not found
          </span>
          <span className={styles.lid}>
            Sorry, that page does not exist
          </span>
        </h1>
        <Back />
      </main>
    </>
  );
};

const styles = tw({
  container: `
    flex flex-col
    w-full h-[calc(100svh-3rem)]
    p-6 pt-16

    sm:h-svh
  `,
  header: `
    flex flex-col justify-end gap-1
    mt-auto
    uppercase
  `,
  eyebrow: `
    block
    mb-2
    font-mono
    text-tiny

    sm:text-xtiny
  `,
  title: `
    block
    pr-18
    text-[min(8vw,1.75rem)]
    leading-[1]
    font-black

    sm:text-[min(4vw,1.75rem)]
    sm:leading-[0.8]
    sm:pr-0
  `,
  lid: `
    block
    mt-2
    text-tiny
    tracking-widest

    sm:text-xtiny
  `,
});
