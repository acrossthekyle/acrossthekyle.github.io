import tw from '@/styles';

const styles = tw({
  container: `
    opacity-0
    animate-in-fade
  `,
  overview: `
    flex flex-col
    p-8
    mb-8
    border-b-1

    dark:border-b-white/25 light:border-b-black/25

    dark:text-white light:text-black

    hecto:p-12
    hecto:mb-12
    mega:p-16
    mega:mb-16
  `,
  heading: `
    text-7xl/13.5
    font-extrablack font-stretch-ultra-condensed
    uppercase
    mb-1

    base:text-4xl/7
    mega:text-5xl/9.25
  `,
  location: `
    block
    uppercase
    text-tiny
    font-semibold font-stretch-semi-condensed
    tracking-widest
    mb-1

    nano:text-xs
    base:font-bold
    base:mb-0
    deka:text-tiny
    kilo:text-xs
  `,
  date: `
    block
    mt-1
    uppercase
    text-tiny
    font-semibold
    tracking-widest
    font-stretch-semi-condensed

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs
  `,
  meta: `
    flex justify-between
    mt-8
    text-xs
    font-bold
    uppercase
    tracking-wide
  `,
  description: `
    mb-4
    text-base

    first:mt-4
    last:mb-0

    base:first:mt-4
  `,
  article: `
    px-8 mb-8
    pb-8
    border-b-1

    dark:border-b-white/25 light:border-b-black/25
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
    mt-8
    line-clamp-3
    text-base
  `,
});

export default styles;
