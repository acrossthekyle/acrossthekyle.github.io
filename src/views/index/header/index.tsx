import { Navigation } from '@/layout';
import tw from '@/styles';

import Location from './location';

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
        <span>LIFE IN CHICAGO</span>
        <span>AS A DEVELOPER</span>
        <span>CRAFTING DIGITAL</span>
        <span>EXPERIENCES</span>
      </h1>
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0

    lg:border-r
    lg:border-current/12.5
  `,
  header: `
    flex flex-col justify-end
    h-[calc(100svh-5rem)]
    p-6
    text-[min(8vw,1.8rem)]
    leading-[1]
    font-black

    sm:text-[min(4vw,1.75rem)]
    sm:leading-[0.8]
    sm:h-[calc(100svh-5rem)]
  `,
});
