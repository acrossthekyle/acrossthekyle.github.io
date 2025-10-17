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
  skeleton: `
    animate-pulse
  `,
  stats: `
    grid grid-cols-2 gap-x-6 gap-y-4
    mb-6

    base:gap-x-12
    giga:grid-cols-3
  `,
  rectangle: `
    aspect-3/2
    mb-6
    bg-neutral-900
  `,
  paragraph: `
    mb-4

    last:mb-0
  `,
  short: `
    w-6/10
  `,
  long: `
    w-7/10
  `,
  tiny: `
    w-20
  `,
  small: `
    w-40
  `,
  medium: `
    w-60
  `,
  tall: `
    h-9
  `,
  hero: `
    flex flex-col gap-2
    mb-10
  `,
  word: `
    inline-block
    h-4
    mr-1
    bg-neutral-900
  `,
});

export default styles;
