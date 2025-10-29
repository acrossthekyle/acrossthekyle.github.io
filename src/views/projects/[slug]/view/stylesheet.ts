import tw from '@/styles';

const styles = tw({
  header: `
    block
    text-5xl/9.25
    font-black font-stretch-extra-condensed
    tracking-tight
    uppercase
    opacity-0
    animate-elastic-in-from-right
    mb-6

    pico:text-6xl/11.5
    milli:text-7xl/13.75
    milli:font-stretch-semi-condensed
    deci:text-8xl/18.5
    base:hidden
  `,
  time: `
    font-bold
  `,
  overview: `
    text-white/75
  `,
  heading: `
    font-bold
    mt-6
  `,
  list: `
    flex flex-col gap-4
    mt-6
  `,
  parted: `
    flex flex-col
  `,
  label: `
    font-bold
  `,
  role: `
    flex
  `,
  index: `
    block
    mr-4
    text-white/75
  `,
  icon: `
    inline-block
    w-4 h-4
    stroke-2
    stroke-white/80
  `,
});

export default styles;
