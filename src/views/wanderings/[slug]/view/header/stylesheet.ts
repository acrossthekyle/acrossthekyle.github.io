import tw from '@/styles';

const styles = tw({
  header: `
    block
    text-5xl/9.25
    font-extrablack font-stretch-extra-condensed
    tracking-tight
    uppercase
    opacity-0
    animate-elastic-in-from-right
    mt-12 mb-6

    nano:text-6xl/11.5
    milli:text-7xl/13.75
    centi:font-stretch-semi-condensed
    deci:text-8xl/18.5
    base:hidden
  `,
  line: `
    block
  `,
  location: `
    block
    text-lg
    font-light font-stretch-semi-condensed
    tracking-normal
  `,
});

export default styles;
