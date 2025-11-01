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
    mt-6 mb-6

    pico:text-6xl/11.5
    milli:text-7xl/13.75
    milli:font-stretch-semi-condensed
    deci:text-8xl/18.5
    base:mt-0
    base:hidden
  `,
  time: `
    text-current/75
  `,
  overview: `
    font-bold
  `,
  heading: `
    font-bold
    mt-6
  `,
  list: `
    flex flex-col gap-4
  `,
  parted: `
    flex flex-col
  `,
  label: `
    font-bold
  `,
  link: `
    text-current/80
  `,
  role: `
    flex
  `,
  index: `
    block
    mr-4
    text-current/75
  `,
  icon: `
    inline-block
    w-4 h-4
    stroke-2
  `,
});

export default styles;
