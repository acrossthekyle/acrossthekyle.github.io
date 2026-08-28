import tw from '@/styles';
import type { Data } from '@/types';

import Back from './back';
import Category from './category';

type Props = {
  travel: Data;
};

export default function Heading({ travel }: Props) {
  return (
    <header className={styles.container}>
      <h1 className={styles.header}>
        <span className={styles.eyebrow}>
          {travel.region} &mdash; {travel.country}
        </span>
        <span className={styles.title}>
          {travel.header}
        </span>
        <span className={styles.lid}>
          {travel.when}
        </span>
      </h1>
      <nav aria-label="supplementary navigation" className={styles.navigation}>
        <Back />
        <Category travel={travel} />
      </nav>
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0
    flex flex-col justify-end
    h-svh
    p-6

    landscape-constrained:h-auto
    landscape-constrained:mt-14

    lg:border-r
    lg:border-current/12.5
  `,
  header: `
    flex flex-col justify-end gap-1
    uppercase
  `,
  eyebrow: `
    block
    mb-2
    text-tiny
    tracking-wide

    sm:text-xtiny
  `,
  title: `
    block
    pr-6
    text-[min(8vw,1.75rem)]
    leading-[0.8]
    font-black font-geist

    sm:text-[min(4vw,1.9rem)]
    lg:text-[min(3vw,2rem)]
  `,
  lid: `
    block
    mt-2
    text-xs
    tracking-widest

    sm:text-tiny
  `,
  navigation: `
    flex flex-col gap-2
    mt-6

    xs:flex-row
    xs:gap-4
  `,
});
