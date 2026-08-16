import { Navigation } from '@/layout';
import tw from '@/styles';

import Location from './location';
import Updates from './updates';

export default function Header() {
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
      <Updates />
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0
  `,
  header: `
    flex flex-col justify-end
    h-[calc(100svh-8.75rem)]
    p-6
    text-[min(8vw,1.75rem)]
    leading-[0.8]
    font-black

    sm:text-[min(4vw,1.75rem)]
  `,
});
