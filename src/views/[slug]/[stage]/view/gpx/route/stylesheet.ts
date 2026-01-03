import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    h-[calc(100vh-22rem)] w-full
  `,
  title: `
    absolute top-4 left-4 z-9999
    text-xs
    uppercase
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
