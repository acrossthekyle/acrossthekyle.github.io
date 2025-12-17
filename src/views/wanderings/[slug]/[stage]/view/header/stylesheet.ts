import tw from '@/styles';

const styles = tw({
  header: `
    relative
    w-full
  `,
  title: `
    text-xl/4
    font-extrablack font-stretch-semi-condensed
    tracking-tighter
    uppercase
    mb-6

    nano:text-3xl/6
    base:font-stretch-semi-expanded
    giga:text-4xl/7
  `,
  line: `
    block
  `,
  eyebrow: `
    block
    mb-1
    uppercase
    text-tiny
    font-semibold
    tracking-widest
    font-stretch-semi-condensed

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs
  `,
  index: `
    inline-block
    ml-0.5
    font-light
    text-xs
    tracking-normal

    base:ml-1.5
  `,
});

export default styles;
