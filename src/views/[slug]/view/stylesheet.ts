  import tw from '@/styles';

const styles = tw({
  container: `
    p-6
    opacity-0
    animate-in-fade

    dark:text-white light:text-black

    base:p-8
    hecto:p-12
    mega:p-16
  `,
  title: `
    text-4xl/7
    font-extrablack font-stretch-ultra-condensed
    uppercase

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
  line: `
    block
  `,
  meta: `
    block
    mt-1.5 mb-4
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
  `,
  nav: `
    mt-6
    border-t-1

    dark:border-t-white/15 light:border-t-black/15

    base:mt-8
    hecto:mt-12
    mega:mt-16
  `,
  list: `
    flex flex-col
  `,
  item: `
    py-6
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0
    last:pb-0

    base:py-8
    hecto:py-12
    mega:py-16
  `,
  link: `
    group/link
    flex flex-col gap-0.5
    mb-2
    text-xl/4
    font-extrablack font-stretch-semi-condensed
    tracking-tighter
    uppercase
    duration-300

    micro:text-4xl/7
    base:gap-1
    base:font-stretch-semi-expanded
    base:text-2xl/5
    mega:text-3xl/6
    giga:text-4xl/7

    hover:font-bold
    hover:font-stretch-normal
  `,
  eyelid: `
    block
    my-0.75
    uppercase
    text-tiny
    font-semibold font-stretch-semi-condensed
    tracking-widest
    duration-300

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs
  `,
  preview: `
    line-clamp-2
    text-base/5.5
  `,
  more: `
    flex items-center gap-1
    mt-4
    font-bold
    text-xs
    uppercase
    duration-300

    hover:gap-2
  `,
  icon: `
    h-3.25 w-3.25
    stroke-3
  `,
});

export default styles;
