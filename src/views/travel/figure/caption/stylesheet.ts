import tw from '@/styles';

const styles = tw({
  caption: `
    absolute z-2 left-4 bottom-4 right-4
    text-2xl/5 text-white/90
    font-bold font-stretch-ultra-condensed
    uppercase
    mr-4

    base:right-18
    base:left-8
    base:bottom-8
  `,
  index: `
    block
    text-base/6 text-white/75
    font-normal
  `,
  label: `
    mr-1
  `,
  arrow: `
    inline-block
    stroke-1

    micro:-mt-1
  `,
  slash: `
    inline
    h-3.5
    w-3.5
    -mt-1
  `,
});

export default styles;
