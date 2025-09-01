import tw from '@/styles';

const styles = tw({
  caption: `
    absolute z-2 left-4 bottom-4
    text-2xl/5 text-white/80
    font-bold font-stretch-ultra-condensed
    uppercase
    mr-4

    nano:text-3xl/6
    micro:text-4xl/8
    base:mr-20
    kilo:left-8
    kilo:bottom-8
  `,
  index: `
    block
    text-base/5
    font-normal
    tracking-normal

    micro:text-xl/5
  `,
  label: `
    mr-1.5
  `,
  arrow: `
    inline-block
    -mt-1

    micro:-mt-2
  `,
  slash: `
    inline
    h-3.5
    w-3.5
    -mt-1
  `,
});

export default styles;
