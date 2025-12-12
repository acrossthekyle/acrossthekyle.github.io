import tw from '@/styles';

const styles = tw({
  header: `
    relative z-1
    my-12

    base:mt-0
  `,
  hero: `
    relative z-2
    text-4xl/7
    font-extrablack font-stretch-condensed
    uppercase
    w-full
    opacity-0
    animate-elastic-in-from-right

    pico:text-5xl/9
    milli:text-6xl/11.5
    deci:text-7xl/13.5
    base:max-w-160
    kilo:max-w-210
    kilo:text-8xl/18
    tera:max-w-260
    tera:text-9xl/24
    peta:text-10xl/30
    peta:max-w-340
  `,
  introduction: `
    flex flex-col-reverse
    opacity-0
    animate-elastic-in-from-right

    base:flex-row
    base:items-end
  `,
  blurb: `
    relative z-2
    mt-8
    text-lg
    font-medium

    base:mt-20
    base:mr-12
    base:w-1/2
    tera:w-160
    tera:text-xl
    peta:w-200
    peta:text-3xl
  `,
  image: `
    !aspect-auto
    !h-auto
    mt-12

    base:!w-110
    base:absolute
    base:right-0
    base:bottom-0
    base:mt-0
    tera:!w-140
    peta:!w-180
  `,
  emphasis: `
    font-serif italic
  `,
});

export default styles;
