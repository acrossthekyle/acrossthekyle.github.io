import tw from '@/styles';

const styles = tw({
  title: `
    block
    mb-6
    text-4xl/8
    font-bold font-stretch-extra-condensed
    tracking-tighter
    uppercase

    pico:text-5xl/10
    nano:text-7xl/14
    milli:text-7xl/14
    milli:font-stretch-semi-condensed
    deci:text-8xl/18
    deci:mb-12
    hecto:hidden
  `,
  block: `block`,
  meta: `
    flex gap-2
    text-tiny/3
    font-light font-stretch-condensed
    tracking-normal
    mb-3

    nano:text-xs/3
    milli:text-sm/3
  `,
  slash: `
    w-3 h-3
    stroke-1
  `,
});

export default styles;
