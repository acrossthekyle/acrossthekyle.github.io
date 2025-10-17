import tw from '@/styles';

const styles = tw({
  container: `
    relative
    bg-transparent
    text-white/90
    overflow-y-scroll
    overscroll-contain
    h-full w-full

    base:pr-12
  `,
  toggle: `
    fixed top-2 right-2 z-1
    flex justify-end

    deka:top-11
    deka:right-9
  `,
  close: `
    hidden

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
  title: `
    text-4xl/7
    font-black font-stretch-semi-condensed
    uppercase
  `,
  lid: `
    block
    mb-1
    text-xs
    tracking-wider
    font-semibold font-stretch-normal
  `,
  time: `
    block
    mt-1
    text-xs
    font-medium font-stretch-normal
  `,
  content: `
    w-full
  `,
  heading: `
    flex items-center gap-1.5
    mb-4
    text-sm text-white/90
    font-black
    tracking-wide
    uppercase
  `,
  paragraph: `
    pb-4
    text-lg
    font-light

    last:pb-0
  `,
});

export default styles;
