import { Navigation } from '@/layout';
import tw from '@/styles';
import type { Collection } from '@/types';

import Location from './location';
import Updates from './updates';

type Props = {
  latest: Collection;
};

export default function Header({ latest }: Props) {
  return (
    <header className={styles.container}>
      <Navigation />
      <Location />
      <h1 className={styles.header}>
        <span>INSPIRED</span>
        <span>BACKPACKER</span>
        <span>AND TRAVEL</span>
        <span>ENTHUSIAST</span>
        <span>LIVING A</span>
        <span>CITY-BASED</span>
        <span>LIFE IN</span>
        <span>CHICAGO AS</span>
        <span>A DEVELOPER</span>
        <span>CRAFTING</span>
        <span>DIGITAL</span>
        <span>EXPERIENCES</span>
      </h1>
      <Updates latest={latest} />
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0
  `,
  header: `
    flex flex-col justify-end
    h-[calc(100svh-8.8rem)]
    p-6
    text-[min(8vw,1.8rem)]
    leading-[1]
    font-black

    sm:text-[min(4vw,1.75rem)]
    sm:leading-[0.8]
  `,
});
