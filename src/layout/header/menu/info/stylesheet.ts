import tw from '@/styles';

const styles = tw({
  info: `
    hidden
    top-0 z-1
    pr-4
    mt-1
    uppercase
    font-mono font-light font-stretch-normal
    tracking-wide
    text-xs/4
    duration-200

    group-hover/item:deka:opacity-100

    base:block
    deka:absolute
    deka:opacity-0
    deka:w-52
    deka:-right-20
    deka:text-right
    deka:text-xs/4
  `,
});

export default styles;
