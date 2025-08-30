import tw from '@/styles';

const styles = tw({
  caption: `
    absolute z-2 left-4 bottom-4

    kilo:left-8
    kilo:bottom-8
  `,
  heading: `
    text-2xl/5 text-white/80
    font-bold font-stretch-ultra-condensed
    uppercase
    me-4
    mb-2

    nano:text-3xl/6
    micro:text-4xl/7
    base:mb-3
    base:me-8
    mega:text-5xl/10
  `,
  index: `
    block
    text-base/5
    font-normal
    tracking-normal

    micro:text-xl/5
  `,
  slash: `
    inline
    h-3.5
    w-3.5
    -mt-1
  `,
  subheading: `
    mb-1
    font-mono
    text-xs

    centi:block
    mega:text-sm
  `,
  highlight: `
    inline
    py-0.5 px-2
    bg-yellow-300/90
    text-black
    rounded-xs
  `,
  break: `
    block
    opacity-0
    text-tiny/1

    milli:text-xs
    milli:opacity-100
    milli:py-0.5
    milli:bg-yellow-300/90
    milli:text-black
    milli:inline
    mega:text-sm
  `,
});

export default styles;
