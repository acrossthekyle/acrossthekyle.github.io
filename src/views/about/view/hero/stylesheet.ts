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
    text-4xl/7
    font-black font-stretch-condensed
    uppercase
    w-full
    opacity-0
    animate-elastic-in-from-right

    pico:text-5xl/9
    milli:text-6xl/11.5
    centi:max-w-130
    deci:text-7xl/13.5
    base:max-w-160
    kilo:max-w-210
    kilo:text-8xl/18
    tera:max-w-260
    tera:text-9xl/26
    peta:max-w-280
  `,
  introduction: `
    flex flex-col-reverse
    mt-8
    opacity-0
    animate-elastic-in-from-right

    deci:-mt-48
    deci:flex-row
    deci:items-end
  `,
  blurb: `
    relative z-2
    mt-8
    text-lg
    font-medium

    deci:mr-12
    deci:mt-56
    deci:w-1/2
    kilo:mt-64
    tera:w-160
    tera:text-xl
    peta:w-200
    peta:text-2xl
  `,
  image: `
    !aspect-auto
    deci:!w-1/2
  `,
  emphasis: `
    font-serif italic
  `,
});

export default styles;
