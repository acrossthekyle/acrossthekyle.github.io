import tw from '@/styles';

const styles = tw({
  section: (shouldShrink: boolean) => tw(`
    ${shouldShrink ? 'h-[calc(100%-13.5rem)]' : 'h-full'}
    w-full
    overflow-hidden
  `),
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-2
    stroke-3
    stroke-black/70 dark:stroke-white/70
    !pointer-events-none
  `,
  outer: `
    relative
    stroke-black/90 dark:stroke-white/90
    stroke-5
    !pointer-events-none
  `,
  inner: `
    relative z-2
    fill-white dark:fill-black
    stroke-white dark:stroke-black
  `,
  solid: `
    fill-black dark:fill-white
    stroke-white dark:stroke-black
    stroke-2
  `,
});

export default styles;
