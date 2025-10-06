import tw from '@/styles';

const styles = tw({
  container: `
    relative
    bg-transparent
    text-white/90
    overflow-y-scroll
    overscroll-contain
    h-full w-full
  `,
  toggle: `
    absolute top-2 right-2 z-1
    flex justify-end

    deka:top-12
    deka:right-12
  `,
  close: `
    hidden
    opacity-0
    animate-in-fade-delayed

    base:block
  `,
  x: `
    stroke-1 stroke-white/90
  `,
  article: `
    flex flex-col gap-8
  `,
  header: `
    w-full

    base:pr-12
  `,
  heading: `
    text-3xl/6 text-left
    font-black font-stretch-semi-condensed
    uppercase
  `,
  lid: `
    block
    text-sm
    tracking-wider
    font-semibold font-stretch-normal
  `,
  time: `
    block
    text-tiny text-white/75
    font-medium font-stretch-normal
  `,
  figure: `
    block
    w-full
  `,
  content: `
    w-full
  `,
  paragraph: `
    pb-4
    text-base text-justify
    font-normal

    last:pb-0
  `,
});

export default styles;
