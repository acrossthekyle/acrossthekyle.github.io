import tw from '@/styles';

const styles = tw({
  container: `
    block
    uppercase
    text-tiny
    font-semibold
    tracking-widest
    font-stretch-semi-condensed
    duration-300

    nano:text-xs
    base:font-bold
    deka:text-tiny
    kilo:text-xs

    group-hover/figure:tracking-widest
    group-hover/figure:font-semibold
    group-hover/figure:font-stretch-condensed
  `,
});

export default styles;
