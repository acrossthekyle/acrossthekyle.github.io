import tw from '@/styles';

const styles = tw({
  caption: `
    absolute z-2 left-4 bottom-4 right-4
    text-xl/4 text-white/90
    font-black font-stretch-condensed
    uppercase
    duration-300
    tracking-tighter
    pointer-events-none

    pico:text-2xl/5
    micro:text-3xl/6
    centi:font-stretch-semi-condensed
    base:text-2xl/5
    hecto:right-8
    hecto:left-8
    hecto:bottom-5
    kilo:text-4xl/7
  `,
});

export default styles;
