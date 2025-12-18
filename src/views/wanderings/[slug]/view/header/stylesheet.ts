import tw from '@/styles';

const styles = tw({
  header: `
    block
    text-5xl/9
    font-extrablack font-stretch-ultra-condensed
    tracking-tight
    uppercase
    opacity-0
    animate-elastic-in-from-right
    mt-12 mb-4

    pico:text-6xl/11.5
    micro:text-7xl/13.75
    centi:font-stretch-semi-condensed
    deci:text-8xl/18.5
    base:hidden
  `,
  line: `
    block
  `,
  subheader: `
    block
    mt-1
    text-xs
    font-normal font-stretch-semi-condensed
    tracking-normal
  `,
});

export default styles;
