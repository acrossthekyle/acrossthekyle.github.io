import tw from '@/styles';
import type { Collection } from '@/types';

import Latest from './latest';
import Location from './location';

type Props = {
  collections: Collection[];
};

export default function Heading({ collections }: Props) {
  return (
    <header className={styles.container}>
      <Location />
      <h1 className={styles.header}>
        <span>INSPIRED</span>
        <span>BACKPACKER</span>
        <span>AND TRAVEL</span>
        <span>ENTHUSIAST</span>
        <span>LIVING A</span>
        <span>CITY-BASED</span>
        <span>LIFE IN CHICAGO</span>
        <span>AS A DEVELOPER</span>
        <span>CRAFTING DIGITAL</span>
        <span>EXPERIENCES</span>
      </h1>
      <Latest latest={collections[0]} />
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
    leading-[1]
    font-black

    sm:text-[min(4vw,1.75rem)]
    sm:leading-[0.8]
  `,
});
