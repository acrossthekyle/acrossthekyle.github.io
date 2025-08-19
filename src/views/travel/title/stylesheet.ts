import tw from '@/styles';

const styles = tw({
  block: `block`,
  title: `
    block
    mb-6
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
  meta: `
    flex gap-2
    text-tiny/3 text-white/90
    font-light font-stretch-condensed
    tracking-normal
    mb-1

    4xs:text-xs/3
    2xs:text-sm/3
  `,
  slash: `
    w-3 h-3
    stroke-1
  `,
  index: `
    inline-block
    ms-2
    text-sm text-yellow-300/90
    font-light font-stretch-condensed
    tracking-normal

    3xs:text-lg
    sm:text-xl/5
  `,
});

export default styles;
