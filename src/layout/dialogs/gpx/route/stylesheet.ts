import tw from '@/styles';

const styles = tw({
  section: `
    h-full w-full
    overflow-hidden
  `,
  map: `
    relative
    h-full w-full
  `,
  route: `
    relative z-2
    stroke-4
    stroke-black dark:stroke-white
    !pointer-events-none
  `,
  outer: `
    relative
    stroke-black dark:stroke-white
    stroke-10
    !pointer-events-none
  `,
  inner: `
    relative z-2
    fill-white dark:fill-black
    stroke-white dark:stroke-black
    !pointer-events-none
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
