import tw from '@/styles';
import type { Data } from '@/types';

type Props = {
  travel: Data;
};

export default function Header({ travel }: Props) {
  return (
    <h1 className={styles.container}>
      <span className={styles.eyebrow}>
        {travel.region} <span aria-hidden="true">&mdash;</span> {travel.country}
      </span>
      <span className={styles.title}>{travel.header}</span>
      <span className={styles.lid}>{travel.when}</span>
    </h1>
  );
};

const styles = tw({
  container: `
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
});
