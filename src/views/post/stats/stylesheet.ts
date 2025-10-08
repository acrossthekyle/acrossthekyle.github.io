import tw from '@/styles';

const styles = tw({
  sections: `
    grid grid-cols-2 gap-x-6 gap-y-4

    base:gap-x-12
    giga:grid-cols-3
  `,
  section: `
    mb-6
  `,
  heading: `
    text-sm text-white/90
    font-black
    tracking-wide
    uppercase
  `,
  content: `
    text-lg
    font-light
  `,
});

export default styles;
