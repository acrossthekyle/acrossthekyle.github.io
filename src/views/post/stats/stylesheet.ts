import tw from '@/styles';

const styles = tw({
  sections: `
    grid grid-cols-2 gap-x-6 gap-y-6
    mb-2

    base:gap-x-12
    giga:grid-cols-3
  `,
  heading: `
    flex items-center gap-1.5
    mb-0.75
    text-sm text-white/90
    font-black
    tracking-wide
    uppercase
  `,
  content: `
    text-lg/5
    font-light
  `,
});

export default styles;
