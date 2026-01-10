import tw from '@/styles';

const styles = tw({
  container: `
    block
    uppercase
    text-tiny
    font-bold font-stretch-semi-condensed
    tracking-widest
    duration-300

    milli:mt-1.5
    milli:text-xs
    base:text-tiny
    kilo:text-xs

    group-hover/figure:tracking-widest
    group-hover/figure:font-semibold
    group-hover/figure:font-stretch-condensed
  `,
});

export default styles;
