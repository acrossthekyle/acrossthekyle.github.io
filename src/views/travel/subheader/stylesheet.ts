import tw from '@/styles';

const styles = tw({
  heading: `
    text-2xl/5 text-white/90
    font-bold font-stretch-ultra-condensed
    uppercase
    me-4
    mt-4 mb-8

    4xs:text-2xl/5
    md:me-8
    sl:text-5xl/10
  `,
  subheading: `
    mb-1
    font-mono
    text-xs text-left
    capitalize

    2xs:block
    sl:text-sm
  `,
  highlight: `
    inline-block
    py-0.5 px-2
    bg-yellow-300/90
    text-black
  `,
});

export default styles;
