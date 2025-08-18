import tw from '@/styles';

const styles = tw({
  caption: `
    absolute z-2 left-4 bottom-4

    2ml:left-8
    2ml:bottom-8
  `,
  heading: `
    text-2xl/5 text-white/80
    font-bold font-stretch-ultra-condensed
    uppercase
    me-4
    mb-2

    4xs:text-3xl/6
    3xs:text-4xl/7
    md:mb-3
    md:me-8
    sl:text-5xl/10
  `,
  index: `
    block
    text-base/5
    font-normal
    tracking-normal

    3xs:text-xl/5
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

    2xs:block
    sl:text-sm
  `,
  highlight: `
    inline
    py-0.5 px-2
    bg-yellow-300/90
    text-black
  `,
  break: `
    block
    opacity-0
    text-tiny/1

    2xs:text-xs
    2xs:opacity-100
    2xs:py-0.5
    2xs:bg-yellow-300/90
    2xs:text-black
    2xs:inline
    sl:text-sm
  `,
});

export default styles;
