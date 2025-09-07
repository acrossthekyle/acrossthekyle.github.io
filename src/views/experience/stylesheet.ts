import tw from '@/styles';

const styles = tw({
  header: `
    block
    mb-6
    text-5xl/10
    font-black font-stretch-extra-condensed
    tracking-tighter
    uppercase

    pico:text-6xl/12
    micro:text-7xl/14
    milli:font-stretch-semi-condensed
    deci:mb-12
    deci:text-8xl/18
    base:hidden
  `,
  stages: `
    group/stages
    flex flex-col gap-6
    mt-6
  `,
  stage: `
    relative
  `,
  figure: `
    group/figure
    relative
    select-none
    aspect-square

    base:aspect-auto
    base:select-auto
  `,
  caption: `
    absolute z-2 left-4 bottom-5.5 right-4
    text-xl/4 text-white/90
    font-black font-stretch-condensed
    uppercase
    duration-300
    tracking-tighter
    pointer-events-none

    pico:text-2xl/5
    base:right-8
    base:left-8
    base:bottom-8
    micro:text-3xl/6
    centi:font-stretch-semi-condensed
    base:text-2xl/5
    deka:text-3xl/6
    deka:right-8
    deka:left-8
    deka:bottom-8
    kilo:text-4xl/7

    group-hover/figure:font-stretch-condensed
    group-hover/figure:font-semibold
    group-hover/figure:tracking-tighter
  `,
  index: `
    block
    text-tiny text-white/90
    font-semibold
    tracking-wider
    font-stretch-semi-expanded
    duration-300

    micro:text-xs
    micro:mb-1.5
    deka:text-tiny
    kilo:mb-1.5
    kilo:text-xs

    group-hover/figure:font-stretch-semi-condensed
    group-hover/figure:tracking-wide
  `,
});

export default styles;
