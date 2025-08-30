import tw from '@/styles';

const styles = tw({
  hero: `
    text-2xl text-justify
    font-black font-stretch-semi-condensed
    uppercase

    deci:text-3xl
    base:text-4xl
    deka:text-5xl
    giga:text-6xl
    tera:text-7xl
    peta:text-8xl
  `,
  since: `
    inline-block
    mt-2
    p-2 py-1
    text-black text-tiny
    font-normal font-mono
    bg-yellow-300

    deci:text-xs
  `,
  introduction: `
    flex flex-col gap-10
    my-10

    kilo:flex-row
  `,
  blurb: `
    flex-1
    text-lg text-justify

    deci:text-xl
    tera:text-2xl
    peta:text-4xl
  `,
  socials: `
    block
    mt-6
    font-mono
    text-sm

    giga:mt-12
    peta:text-lg
  `,
  me: `
    flex-2
    font-mono
    text-sm text-left

    deci:text-right
    peta:text-lg
  `,
  image: `
    aspect-3/2
    object-cover object-top
    rounded-sm
    brightness-40
    grayscale-100
    duration-300

    hover:brightness-90
    hover:grayscale-0
  `,
  at: `
    block
    text-yellow-300
  `,
  link: `
    text-yellow-300
  `,
  section: `
    flex flex-col-reverse gap-10
    mt-20

    kilo:flex-row
    giga:mt-40
  `,
  left: `
    flex-1
  `,
  paragraph: `
    mb-4
    text-lg text-justify

    peta:text-3xl
  `,
  right: `
    flex-1
    flex flex-col gap-10 justify-between

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
    mt-4
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
