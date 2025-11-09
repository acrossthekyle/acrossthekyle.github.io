import tw from '@/styles';

const styles = tw({
  section: (shouldGrow: boolean) => tw(`
    absolute right-5 z-9998
    h-52 w-[calc(100%-2.5rem)] base:h-60 base:w-120
    rounded-2xl
    pt-8
    bg-black/75 dark:bg-white/75
    select-none
    touch-none
    duration-300

    base:rounded-md
    deka:right-12

    ${shouldGrow ? 'bottom-5 deka:bottom-12' : '-bottom-60'}
  `),
  close: `
    absolute left-0 top-0 right-0 z-100
    flex items-center justify-center
    w-full
  `,
  handle: `
    p-4 pt-3
  `,
  bar: `
    block
    h-1 w-10
    bg-white/90 dark:bg-black/90
    rounded-full
  `,
  title: `
    flex justify-between gap-4
    absolute top-5 left-2.5 right-2.5 z-99
    text-sm text-white/90 dark:text-black/90
    font-normal
    uppercase
    tracking-tighter
  `,
  change: `
    flex gap-2
  `,
  inline: `
    flex items-center gap-1
  `,
  arrow: `
    w-4 h-4
    stroke-white/90 dark:stroke-black/90
    stroke-2
  `,
  ticks: `
    absolute left-2.5 bottom-2 right-2.5 z-9999
    flex justify-between
  `,
  tick: `
    w-[1px] h-1.5
    bg-black dark:bg-white

    first:opacity-0
    last:opacity-0
  `,
  distance: `
    absolute left-2.5 bottom-0 right-2.5 z-99
    text-xs text-black/90 text-center dark:text-white/90
    font-medium
    uppercase
    tracking-tighter

    base:left-4
    base:right-4
    base:bottom-10
  `,
});

export default styles;
