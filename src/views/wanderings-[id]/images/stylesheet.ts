import tw from '@/styles';

const POSITIONS = [
  'col-span-16 sm:border-b-1 sm:col-span-7 sm:border-r-1',
  'col-span-16 sm:border-b-1 sm:col-span-9',
  'col-span-16 sm:border-b-1 sm:col-span-16',
  'col-span-16 sm:border-b-1 sm:col-span-9 sm:border-r-1',
  'col-span-16 sm:border-b-1 sm:col-span-7',
];

export const styles = tw({
  list: `
    snap-x snap-mandatory
    overflow-x-auto
    flex
    w-full h-full
    perspective-normal
    no-scrollbar
  `,
  item: (index: number, isInView: boolean) => tw(`
    snap-start
    shrink-0
    w-full h-full
    border-current/10
    overflow-hidden
  `),
  figure: `
    group
    relative
    h-full
  `,
  cta: `
    relative z-1
    block
    h-full w-full
    overflow-hidden

    after:absolute
    after:inset-0
    after:z-2
  `,
  image: (isInView: boolean) => tw(`
    !h-60

    sm:!h-full

    ${isInView ? 'motion-safe:brightness-90' : 'motion-safe:brightness-40'}
    ${isInView ? 'motion-safe:grayscale-20' : 'motion-safe:grayscale'}
    motion-safe:duration-700
    motion-safe:ease-in-out
  `),
  caption: `
    absolute inset-0 z-2
    flex flex-row justify-between gap-4
    w-full
    mt-2
    text-xtiny
    font-normal
    tracking-widest
    uppercase
  `,
  index: `
    flex gap-1
    tracking-[0.125rem]
  `,
  meta: `
    flex flex-col gap-0
  `,
  strong: `
    font-black
  `,
});


