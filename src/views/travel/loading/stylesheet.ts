import tw from '@/styles';

const styles = tw({
  skeleton: `
    animate-pulse
  `,
  header: `
    flex flex-col gap-2
    w-full
    mb-6

    hecto:hidden
  `,
  highlight: `
    mb-2
  `,
  heading: `
    mt-4 mb-10
  `,
  big: `h-10`,
  paragraph: `
    mb-4
  `,
  stages: `
    flex flex-col gap-10
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
  large: `
    w-80
  `,
  hero: `
    block
    h-20
    bg-neutral-900
  `,
  sentence: `
    block
    h-8
    bg-neutral-900
  `,
  word: `
    inline-block
    h-4
    mr-1
    bg-neutral-900
  `,
  image: `
    block
    w-full h-80
    rounded-sm
    bg-neutral-900
  `,
});

export default styles;
