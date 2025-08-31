import tw from '@/styles';

const styles = tw({
  eyebrow: `
    block
    mb-1
    text-sm
  `,
  text: `
    inline
    text-xs/3
    font-light font-stretch-condensed
    tracking-normal

    milli:text-sm/3
  `,
  slash: `
    inline-block
    mx-1 -mt-0.5
    w-2 h-2
    stroke-2

    milli:w-3
    milli:h-3
    milli:mx-2
  `,
});

export default styles;
