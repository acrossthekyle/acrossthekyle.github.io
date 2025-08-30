import tw from '@/styles';

const styles = tw({
  heading: `
    text-2xl/5
    font-bold font-stretch-ultra-condensed
    uppercase
    me-4
    mt-4 mb-8

    nano:text-2xl/5
    base:me-8
    mega:text-5xl/10
  `,
  subheading: `
    mb-1
    font-mono
    text-xs text-left
    capitalize

    milli:block
    mega:text-sm
  `,
  highlight: `
    inline-block
    py-0.5 px-2
    bg-yellow-300/90
    text-black
    rounded-xs
  `,
});

export default styles;
