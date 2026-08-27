import tw from '@/styles';
import type { Travel } from '@/types';

import Latest from './latest';
import Location from './location';

type Props = {
  travels: Travel[];
};

export default function Heading({ travels }: Props) {
  return (
    <header className={styles.container}>
      <Location />
      <h1 className={styles.header}>
        <span>Inspired</span>
        <span>backpacker</span>
        <span>and travel</span>
        <span>enthusiast</span>
        <span>living a</span>
        <span>city-based</span>
        <span>life in Chicago</span>
        <span>as a developer</span>
        <span>crafting digital</span>
        <span>experiences</span>
      </h1>
      <Latest latest={travels[0]} />
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0
    flex flex-col
    h-svh
    p-6 pt-16

    landscape-constrained:pt-13

    lg:border-r
    lg:border-current/12.5
  `,
  header: `
    flex flex-col justify-end
    mt-auto
    text-[min(8vw,1.8rem)]
    leading-[0.8]
    font-black font-geist
    uppercase

    sm:text-[min(4vw,1.9rem)]
    lg:text-[min(3vw,2rem)]
  `,
});
