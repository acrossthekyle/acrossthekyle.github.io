import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    aspect-square
    rounded-sm
    overflow-hidden

    base:h-54
    base:w-full
  `,
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-0
    stroke-4
    !pointer-events-none

    light:stroke-white dark:stroke-black
  `,
  outer: `
    relative
    stroke-8
    !pointer-events-none

    light:stroke-white dark:stroke-black
  `,
  start: `
    relative z-2
    !pointer-events-none

    light:fill-white dark:fill-black
    light:stroke-white dark:stroke-black
  `,
  end: `
    relative z-2
    !pointer-events-none

    light:fill-white dark:fill-black
    light:stroke-black dark:stroke-white
  `,
});

export default styles;
