import tw from '@/styles';

const styles = tw({
  container: `
    block
    mt-2
    uppercase
    text-tiny
    font-bold font-stretch-semi-condensed
    tracking-widest
    duration-300

    milli:text-xs
    base:text-tiny
    kilo:text-xs

    group-hover/figure:tracking-widest
    group-hover/figure:font-semibold
    group-hover/figure:font-stretch-condensed
  `,
});

export default styles;
