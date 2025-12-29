import tw from '@/styles';

const styles = tw({
  text: `
    inline-block
    my-1
    duration-300
    text-xl/4
    font-extrablack font-stretch-semi-condensed
    tracking-tighter
    uppercase

    micro:text-3xl/6
    base:font-stretch-semi-expanded
    base:text-2xl/5
    mega:text-3xl/6
    giga:text-4xl/7

    group-hover/figure:font-bold
    group-hover/figure:font-stretch-normal
  `,
});

export default styles;
