import tw from '@/styles';

const styles = tw({
  block: `block`,
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
