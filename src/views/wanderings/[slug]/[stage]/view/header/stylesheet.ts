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
    mb-2

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
  stats: `
    uppercase
    text-xs text-center
    font-bold
    py-0.75
    w-38
    border-1
    rounded-full
    mb-6
    duration-300

    hover:bg-current/10

    base:py-1
  `,
});

export default styles;
