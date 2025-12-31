import tw from '@/styles';

const styles = tw({
  container: `
    opacity-0
    animate-in-fade
  `,
  article: `
    dark:text-white light:text-black
  `,
  heading: `
    text-4xl/7
    font-extrablack font-stretch-ultra-condensed
    uppercase
    mt-4 mx-4 mb-1.5

    plank:text-5xl/9.25
    nano:text-6xl/11.25
    base:mt-8
    base:mx-8
    base:text-4xl/7
    hecto:mt-12
    hecto:mx-12
    hecto:text-5xl/9.25
    mega:mt-16
    mega:mx-16
    mega:text-6xl/11.25
  `,
  eyebrow: `
    block
    uppercase
    text-tiny
    font-semibold font-stretch-semi-condensed
    tracking-wide
    mb-1

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs
  `,
  meta: `
    mx-4 mb-2
    text-tiny
    font-semibold font-stretch-semi-condensed
    uppercase
    tracking-wide

    nano:text-xs
    base:font-bold
    base:mx-8
    deka:text-tiny
    hecto:mx-12
    mega:mx-16
    kilo:text-xs
  `,
  figure: `
    relative

    mx-4 mb-4 mt-4

    base:mx-8
    base:mb-8
    hecto:mx-12
    hecto:mb-6
    mega:mx-16
    mega:mb-8
  `,
  caption: `
    p-4
  `,
  section: `
    px-4 pb-4

    base:px-8
    base:pb-8
    hecto:px-12
    hecto:pb-12
    mega:px-16
    mega:pb-16
  `,
  paragraph: `
    text-base
    mb-4

    last:mb-0
  `,
});

export default styles;
