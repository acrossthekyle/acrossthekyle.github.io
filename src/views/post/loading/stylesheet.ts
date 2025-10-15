import tw from '@/styles';

import stylesheet from '../stylesheet';

const styles = tw({
  container: stylesheet.container,
  skeleton: `
    animate-pulse
  `,
  stats: `
    grid grid-cols-2 gap-x-6 gap-y-4
    mb-6

    base:gap-x-12
    giga:grid-cols-3
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
  hero: `
    block
    h-20
    bg-neutral-900
  `,
  word: `
    inline-block
    h-4
    mr-1
    bg-neutral-900
  `,
});

export default styles;
