import tw from '@/styles';

const styles = tw({
  header: `
    block
    mb-1
    text-5xl/10
    font-black font-stretch-extra-condensed
    tracking-tighter
    uppercase

    plank:text-6xl/12
    plank:font-stretch-ultra-condensed
    pico:text-7xl/14
    nano:font-stretch-extra-condensed
    milli:font-stretch-semi-condensed
    deci:text-8xl/18
    base:hidden
  `,
  date: `
    block
    mb-10
    text-base
    font-medium
    uppercase

    deci:mb-12
    base:hidden
  `,
});

export default styles;
