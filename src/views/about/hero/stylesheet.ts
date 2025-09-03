import tw from '@/styles';

const styles = tw({
  header: `
    relative z-1
    mb-10

    deci:mb-16
    kilo:mb-32
  `,
  hero: `
    relative z-2
    text-4xl/8
    font-black font-stretch-condensed
    uppercase
    w-full

    pico:text-5xl/10
    milli:text-6xl/12
    centi:max-w-130
    deci:text-7xl/14
    base:max-w-160
    kilo:max-w-200
    kilo:text-8xl/18
    tera:max-w-260
    tera:text-9xl/26
    peta:max-w-280
  `,
  introduction: `
    flex flex-col-reverse

    centi:flex-row
  `,
  blurb: `
    relative z-2
    w-full
    mt-10
    text-base
    font-medium

    centi:w-1/2
    deci:mt-16
    base:text-lg
    kilo:mt-32
    tera:w-160
    tera:text-xl
    peta:w-200
    peta:text-2xl
  `,
  emphasis: `
    font-serif italic
  `,
});

export default styles;
