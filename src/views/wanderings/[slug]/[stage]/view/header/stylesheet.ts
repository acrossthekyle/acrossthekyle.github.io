import tw from '@/styles';

const styles = tw({
  header: `
    relative
    w-full
  `,
  title: `
    text-2xl/5
    font-extrablack font-stretch-semi-expanded
    tracking-tighter
    uppercase

    pico:text-3xl/6
    giga:text-4xl/7
  `,
  eyebrow: `
    block
    mb-1
    uppercase
    text-tiny/3
    font-bold
    tracking-widest
    font-stretch-semi-condensed

    micro:text-xs
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
