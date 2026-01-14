import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    h-[calc(100vh-10rem)]

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

    dark:stroke-white light:stroke-black
  `,
  outer: `
    relative
    stroke-8
    !pointer-events-none

    dark:stroke-white light:stroke-black
  `,
  start: `
    relative z-2
    !pointer-events-none

    dark:fill-white light:fill-black
    dark:stroke-white light:stroke-black
  `,
});

export default styles;
