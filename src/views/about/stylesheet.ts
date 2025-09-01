import tw from '@/styles';

const styles = tw({
  header: `
    relative z-1
    mb-8

    deka:mb-0
  `,
  hero: `
    text-4xl text-justify [text-align-last:justify]
    font-black font-stretch-condensed
    uppercase
    tracking-tighter

    base:tracking-normal
    deka:text-6xl
    giga:text-7xl
    tera:text-8xl
    peta:text-9xl
  `,
  highlight: `
    inline-block
    mt-2 mb-4
    p-2 py-1
    text-black text-sm
    font-normal font-mono
    bg-yellow-300/90

    tera:text-lg
  `,
  link: `
    text-yellow-300
  `,
  external: `
    inline-block
    mt-2 mb-4
    text-yellow-300/90 text-base
    font-normal font-mono

    tera:text-lg
  `,
  arrow: `
    inline-block
    ml-0.75 -mt-0.25
    w-4 h-4
    stroke-2
    stroke-yellow-300/90
  `,
  introduction: `
    relative z-0
    flex items-center justify-between flex-col-reverse gap-10
    mb-16
    pb-16
    border-b-1 border-b-white/25

    centi:items-end
    centi:flex-row
  `,
  blurb: `
    w-full
    text-xl text-justify
    font-medium

    centi:w-120
    base:text-2xl
    tera:w-160
    tera:text-3xl
    peta:w-200
    peta:text-5xl
  `,
  section: `
    flex flex-col gap-10
    mb-16
    pb-16
    border-b-1 border-b-white/25

    kilo:flex-row

    last:mb-0
    last:border-0
    last:pb-0
  `,
  left: `
    flex-1
  `,
  paragraph: `
    mb-4
    text-lg text-justify

    tera:text-2xl
    peta:text-3xl

    last:mb-0
  `,
  right: `
    flex-1
    flex flex-col gap-6 justify-between

    milli:gap-10
    centi:flex-row
  `,
  heading: `
    w-40
    text-3xl
    font-black
    uppercase

    kilo:text-4xl
    giga:w-50
    giga:text-5xl
    peta:text-6xl
  `,
  subheading: `
    text-lg
    font-black
    uppercase

    peta:text-2xl
  `,
  timeline: `
    grid grid-cols-2 gap-4
    text-left

    centi:w-50
    centi:flex
    centi:flex-col
    centi:text-right
    tera:w-80
  `,
  place: `
    font-semibold

    tera:text-2xl
    peta:text-4xl
  `,
  when: `
    text-sm
    font-light

    tera:text-xl
    peta:text-2xl
  `,
});

export default styles;
