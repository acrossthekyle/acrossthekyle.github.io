import tw from '@/styles';

const styles = tw({
  section: (shouldGrow: boolean) => tw(`
    absolute left-5 bottom-5 right-5 z-9998
    ${shouldGrow ? 'h-60 base:w-120' : 'h-54 base:w-0 base:h-0'}
    rounded-2xl
    ${shouldGrow ? 'base:p-6 base:pt-8' : ''}
    bg-black/90 dark:bg-white/90
    overflow-hidden
    select-none
    touch-none
    duration-300

    base:rounded-md
    base:left-auto
    deka:bottom-12
    deka:right-12
  `),
  title: `
    flex justify-between gap-4
    absolute top-2.5 left-2.5 right-2.5 z-99
    text-sm text-white/90 dark:text-black/90
    font-normal
    uppercase
    tracking-tighter

    base:justify-normal
    base:top-7.25
    base:right-8.5
    base:left-8.5
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
  close: `
    hidden
    absolute right-8 top-7 z-99

    base:block
  `,
  icon: `
    stroke-white/90 dark:stroke-black/90
    stroke-1
  `,
  ticks: `
    absolute left-2.5 bottom-2 right-2.5 z-9999
    flex justify-between

    base:left-8
    base:right-8
    base:bottom-8
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
