import tw from '@/styles';

const styles = tw({
  title: `
    block
    mb-6 mt-5
    text-4xl/8 text-white/90
    font-bold font-stretch-extra-condensed
    tracking-tighter
    uppercase

    5xs:text-5xl/10
    4xs:text-6xl/12
    2xs:text-7xl/14
    2xs:font-stretch-semi-condensed
    sm:text-8xl/18
    sm:mb-12
    ml:hidden
  `,
  block: `block`,
  meta: `
    flex gap-2
    text-tiny/3 text-white/90
    font-light font-stretch-condensed
    tracking-normal
    mb-2 -mt-4

    4xs:text-xs/3
    2xs:text-sm/3
    ml:mt-0
  `,
  slash: `
    w-3 h-3
    stroke-1
  `,
});

export default styles;
