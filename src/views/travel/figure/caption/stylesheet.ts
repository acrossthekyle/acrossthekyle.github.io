import tw from '@/styles';

const styles = tw({
  caption: `
    absolute z-2 left-4 bottom-4 right-4
    text-xl/4 text-white/90
    font-black font-stretch-condensed
    uppercase
    mr-4
    duration-300
    tracking-tighter

    base:right-18
    base:left-8
    base:bottom-8
    pico:text-2xl/5
    micro:text-3xl/6
    centi:font-stretch-semi-condensed
    centi:text-4xl/7
    hecto:text-3xl/6
    kilo:text-4xl/7

    group-hover/figure:font-stretch-condensed
    group-hover/figure:font-semibold
    group-hover/figure:tracking-tighter
  `,
  index: `
    block
    mb-1.5
    text-xs text-white/90
    font-semibold
    tracking-wider
    font-stretch-semi-expanded
    duration-300

    group-hover/figure:font-stretch-semi-condensed
    group-hover/figure:tracking-wide
  `,
});

export default styles;
