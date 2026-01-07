import tw from '@/styles';

const styles = tw({
  container: `
    block
    mb-1
    uppercase
    text-xs
    font-bold font-stretch-semi-condensed
    tracking-widest
    duration-300

    base:text-tiny
    kilo:text-xs
    peta:text-lg

    group-hover/figure:tracking-widest
    group-hover/figure:font-semibold
    group-hover/figure:font-stretch-condensed
  `,
});

export default styles;
