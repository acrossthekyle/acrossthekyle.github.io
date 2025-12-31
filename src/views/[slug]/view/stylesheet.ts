  import tw from '@/styles';

const styles = tw({
  container: `
    opacity-0
    animate-in-fade
  `,
  overview: `
    flex flex-col
    p-4
    mb-4
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    dark:text-white light:text-black

    base:p-8
    base:mb-8
    hecto:p-12
    hecto:mb-12
    mega:p-16
    mega:mb-16
  `,
  heading: `
    text-4xl/7
    font-extrablack font-stretch-ultra-condensed
    uppercase
    mb-1.5

    plank:text-5xl/9.25
    nano:text-6xl/11.25
    base:text-4xl/7
    hecto:text-5xl/9.25
    mega:text-6xl/11.25
  `,
  eyebrow: `
    block
    uppercase
    text-tiny
    font-semibold font-stretch-semi-condensed
    tracking-wide
    mb-1

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs
  `,
  meta: `
    mb-4
    text-tiny
    font-semibold font-stretch-semi-condensed
    uppercase
    tracking-wide

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs
  `,
  figure: `
    relative

    base:mb-2
  `,
  description: `
    mb-4
    text-base

    first:mt-4
    last:mb-0

    base:first:mt-4
  `,
  article: `
    px-4 pb-4
    mb-4
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:text-white light:text-black

    last:border-b-0
    last:mb-0

    base:px-8
    base:mb-8
    base:pb-8
    hecto:px-12
    hecto:mb-12
    hecto:pb-12
    mega:px-16
    mega:mb-16
    mega:pb-16
  `,
  preview: `
    mt-4
    line-clamp-3
    text-base

    base:mt-8
  `,
});

export default styles;
