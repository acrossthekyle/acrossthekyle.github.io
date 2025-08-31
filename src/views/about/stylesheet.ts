import tw from '@/styles';

const styles = tw({
  header: `
    mb-12
  `,
  hero: `
    text-4xl text-justify [text-align-last:justify]
    font-black font-stretch-condensed
    uppercase
    tracking-tighter

    base:tracking-normal
    deka:text-6xl
    giga:text-7xl
    peta:text-8xl
  `,
  highlight: `
    inline-block
    mt-4
    p-2 py-1
    text-black text-sm
    font-normal font-mono
    bg-yellow-300/90
    lowercase
  `,
  link: `
    text-yellow-300
  `,
  introduction: `
    flex justify-between flex-col gap-10
    mb-12
    pb-12
    border-b-1 border-b-white/25

    kilo:flex-row
  `,
  blurb: `
    text-2xl
    font-light

    base:text-3xl
    peta:text-4xl
  `,
  section: `
    flex flex-col gap-10
    mb-12
    pb-12
    border-b-1 border-b-white/25

    kilo:flex-row-reverse

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
    text-2xl
    font-black
    uppercase

    giga:w-50
    giga:text-4xl
    peta:text-5xl
  `,
  subheading: `
    text-lg
    font-black
    uppercase

    peta:text-2xl
  `,
  timeline: `
    w-50
    text-left

    centi:text-right
  `,
  list: `
    flex flex-col gap-4
  `,
  place: `
    font-semibold
    uppercase

    peta:text-2xl
  `,
  when: `
    text-sm
    font-light

    peta:text-xl
  `,
});

export default styles;
