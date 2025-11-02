import tw from '@/styles';

const styles = tw({
  header: `
    block
    text-5xl/9.25
    font-extrablack font-stretch-extra-condensed
    tracking-tight
    uppercase
    opacity-0
    animate-elastic-in-from-right
    mt-12 mb-6

    pico:text-6xl/11.5
    micro:text-7xl/13.75
    centi:font-stretch-semi-condensed
    deci:text-8xl/18.5
    base:hidden
  `,
  line: `
    block
  `,
  info: `
    block
    mt-2
    text-tiny/3
    font-light font-stretch-normal
    tracking-tight
  `,
  type: `
    inline-block
    mr-3
  `,
  location: `
    inline-block
    mr-3
  `,
  date: `
    inline-block
  `,
});

export default styles;
