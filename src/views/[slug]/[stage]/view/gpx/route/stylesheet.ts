import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    h-[calc(100dvh-22rem)] w-full
    border-t-1

    dark:border-t-white/15 light:border-t-black/15
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
    stroke-10
    !pointer-events-none

    dark:stroke-white light:stroke-black
  `,
  inner: `
    relative z-2
    !pointer-events-none

    dark:fill-black light:fill-white
    dark:stroke-black light:stroke-white
  `,
  eyebrow: `
    block
    font-normal
    text-tiny
    uppercase
    tracking-widest
  `,
  line: `
    block
    text-base/3.5
    font-extrablack
    uppercase
  `,
  elevation: `
    block
    font-normal
    text-xs
    tracking-normal
  `,
});

export default styles;
